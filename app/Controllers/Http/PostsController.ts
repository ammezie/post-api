import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
import PostValidator from 'App/Validators/PostValidator'

export default class PostsController {
  public async index({ response }: HttpContextContract) {
    const posts = await Post.all()

    return response.ok({
      message: 'Posts retrieved successfully',
      data: posts,
    })
  }

  public async store({ request, response }: HttpContextContract) {
    const payload = await request.validate(PostValidator)

    const post = await Post.create(payload)

    return response.created({
      message: 'Post created successfully',
      data: post,
    })
  }

  public async show({ params, response }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)

    return response.ok({
      message: 'Post retrieved successfully',
      data: post,
    })
  }

  public async update({ request, params, response }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)
    const { title, content } = await request.validate(PostValidator)

    post.title = title
    post.content = content

    await post.save()

    return response.ok({
      message: 'Post updated successfully',
      data: post,
    })
  }

  public async destroy({ params, response }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)

    await post.delete()

    return response.ok({
      message: 'Post deleted successfully',
    })
  }
}
