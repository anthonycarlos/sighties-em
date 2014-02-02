1. Creating a Static Mockup

2. Obtaining Ember.js and Dependencies

The jQuery library references jquery-1.10.2.min.map:

//@ sourceMappingURL=jquery-1.10.2.min.map

This mapping file can be downloaded from the same location as
jquery-1.10.2.min.js and should be saved locally in the same directory.

3. Adding the First Route and Template

How does the requested URL cause a particular template to be rendered?

The router we set-up maps paths to templates:

Todos.Router.map(function () {
  this.resource('todos', { path: '/' });
});

The index path, '/', is therefore mapped to the 'todos' template. When
Ember renders the page, it will look for a handlebars template with a
data-template-name attribute of 'todos':

<script type="text/x-handlebars" data-template-name="todos">

I need to better understand how to express routes. Sometimes we use
this.resource. Other times, Ember.Route is extended. Also, there is the
issue of nested routes, which is shown in the peepcode, but not
explained clearly enough for me.

4. Modeling Data

We create the todo model by extendind DS.Model and passing a javascript
object whose values are DS.attr('string') and DS.attr('boolean'). I
wonder what other data types are supported?

5. Using Fixtures

We declare the ApplicationAdapter of our app to be an extension of
DS.FixtureAdapter. I wonder what the possible values are? Perhaps
working through the guide where fixtures are replaced with a RESTAdapter
will help. http://emberjs.com/guides/models/connecting-to-an-http-server

6. Displaying Model Data

We define a route called Todos.TodosRoute which is an extension of
Ember.Route. It has a model method which returns the fixture data.

Todos.TodosRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('todo');
  }
});

Before we defined this route, Ember automagically created it for us. We
need it now to be able to call the fixture data. There is some magic
going on behind the scenes. When a route has a model hook method, it is
invoked when processing a request.

For the first time, we can see most of how a request is handled.
  1. The user requests the index page.
  2. Our router maps the '/' path to 'todos', which is how we identify
     TodosRoutes and TodosController.
  3. TodosRoute's hook methods are called. In our case, model() is 
     called.
  4. The TodosController uses the data returned by model() and makes it
     available to the template for rendering.

7. Displaying a Model's Complete State

This is a good example of how to use the bind-attr helper in handlebars.
We're using a conditional to set the li's css class to "completed".

8. Creating a New Model Instance

We replace the static input tag with a handlebars input helper. In it,
we set the value to newTitle and the action to createTodo. 

Where does newTitle come from? It looks like it is a property on the
controller. I believe that it can be called whatever we want in the
view, and that property will be set in the controller.

9. Marking a Model as Complete or Incomplete

We need to make two improvements for displaying complete or incomplete
todos. First, when the page loads, complete todos such as "Learn
Ember.js" are not checked. They are correctly, however, rendered in a
strike-through font.

Second, when a todo is checked, the font should be strike-through. The
converse is also expected. If a todo is unchecked, the font should
change from strike-through to normal.

It appears that we create the TodoController during this step and it is
linked by the handlebars code:

    {{#each itemController="todo"}}

Why do we need to use a controller? I have removed the itemController
attribute and even removed the script tag which loads the TodoController
in an attempt to circumvent having to use a controller. It seems to work
just fine visually.

We need to use a controller to allow us to save the state of the todo.
Without a controller, we can certainly link directly to the model and
the bind-attr will change the css class correctly. However, it would not
persist the state. We're currently using fixtures and there is no real
save command, but when we move away from fixtures, the controller will
allow us to write the code that can save the model.

The intent of this step is to show how to use a controller to decorate
the model and give us the hook we need to save it.

10. Displaying the Number of Incomplete Todos

We change the markup of index.html to use handlebars. These expose
properties of the TodosController. In our example there is a filterBy
method which reduces a result set. I don't know where this method came
from. But, because we are calling get('xyz'), these properties are
dynamically bound and will automagically update.

Also, it appears that the .property() method is called on the returned
value. A computed property transforms an object's function into a
property. It also sets up the observer so that if a dependency is
updated, the function gets re-computed.

11. Toggling between Showing and Editing States

Here we change the markup of the <li> to conditionally add an editing
class if we are editing. Furthermore, we change the content of the <li>
tag to use an <input> tag if we are editing and the previously existing
<label> tag if we are not. The data upon which the conditional is
examining comes from the TodoController. First, there is a new property
called isEditing which is initialized to false. This is used to decide
whether to add the editing class and also is used to decide whether to
us an <input> or <label> tag. It is interesting to note that we can
simply add it to the TodoController and it becomes available to the
handlebars template.

Second, there is an action editTodo added to the <label> tag. It is
fired off when there is a doubleClick event and sets the isEditing
property of the TodoController to true. How does isEditing ever get
changed back to false? It doesn't-- yet.

12. Accepting Edits

13. Deleting a Model

14. Adding Child Routes

15. Transitioning to Show Only Incomplete Todos

16. Transitioning to Show Only Complete Todos

17. Transitioning back to Show All Todos

18. Displaying a Button to Remove All Completed Todos

19. Indicating When All Todos are Complete

20. Toggling All Todos Between Complete and Incomplete

21. Replacing the Fixture Adapter with Another Adapter
