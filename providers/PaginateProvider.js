'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class PaginateProvider extends ServiceProvider {
  /**
   * Register namespaces to the IoC container
   *
   * @method register
   *
   * @return {void}
   */
  register () {
    //
  }

  /**
   * Attach context getter when all providers have
   * been registered
   *
   * @method boot
   *
   * @return {void}
   */
  boot () {
    //
    const Request = use('Adonis/Src/Request')

    Request.macro('paginate', function () {
      const query = this.get()
      const page = query.page || 1
      let limit = query.limit || 50
      
      if (limit > 100) { limit = 100 }

      if (page <= 0) { page = 1 }

      const sort = query.sort || 'created_at'
      const desc = query.desc === 'true' ? 'desc' : 'asc'

      return { page, limit, sort, desc }
    })
  }
}

module.exports = PaginateProvider
