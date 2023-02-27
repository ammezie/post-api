import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  // Route.resource('posts', 'PostsController').apiOnly()
  Route.get('posts', 'PostsController.index')
  Route.post('posts', 'PostsController.store')
  Route.get('posts/:id', 'PostsController.show')
  Route.put('posts/:id', 'PostsController.update')
  Route.delete('posts/:id', 'PostsController.destroy')
}).prefix('api')
