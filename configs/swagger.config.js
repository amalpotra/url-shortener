import swaggerJSDoc from 'swagger-jsdoc'

const options = {
  swaggerDefinition: {
    openapi: '3.0.3',
    info: {
      title: 'URL Shortener',
      version: '1.0.0',
      description:
        'Shortens your long links into more manageable and useable URLs.',
    },
  },
  apis: ['./routes/*.js'],
}

export default swaggerJSDoc(options)
