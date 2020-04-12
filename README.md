# adonis-paginate

A provider for the Adonis framework.

This library provides an easy way to paginate with AdonisJS.

## Install

```
npm install --save adonis-paginate
```

## Configure

Register the provider in `start/app.js`:

```javascript
const providers = [
  ...
  'adonis-paginate/providers/PaginateProvider'
]
```

## Example

```javascript
Route.get('/customers', ({ request }) => {
  const { page, limit, sort, desc } = request.paginate()

  console.log(`page: ${page}`) // default: 1
  console.log(`limit: ${limit}`) // default: 50, max: 100
  console.log(`sort: ${sort}`) // default: created_at
  console.log(`desc: ${desc}`) // default: true, return: desc or asc
})
```

## Thanks

Special thanks to the creator(s) of [AdonisJS](http://adonisjs.com/) for creating such a great framework.
