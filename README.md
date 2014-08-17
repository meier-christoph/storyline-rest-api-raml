storyline-rest-api-raml
=======================

The specification for the RESTfull API of storyline.lu using RAML.

RAML is a modeling language for RESTFull API's. You can find the 
entire specification of RAML here: http://raml.org/spec.html

One of the many benefits of using RAML is that there are many 
great tools available for working with RAML files.
In this case, we are using raml2html to generate automatic 
documentation for the API.

Getting Started
---------------

There is a single root file named storyline.raml which is the entrypoint.
All other RAML files must start with an underscore. Please create a new 
file for each new resource you add to the API.

Example: all methods for the resource _/messages_ should be put in the 
_messages.raml file. The you can add your new methods to the API by 
appending ```raml: /messages: !include _messages.raml``` to storyline.raml

## Schemas

Schemas (xsd or json) should be placed in the _schemas folder and then included.

```
body:
  text/xml:
    schema: !include _schemas/some-file.xsd
  application/json:
    schema: !include _schemas/some-file.schema.json
```

Don't write schema definitions inside the RAML files directly.

## Examples

Examples (xml or json) should be placed in the _examples folder and then
included.

```
body:
  text/xml:
    example: !include _examples/some-file.xml
  application/json:
    example: !include _examples/some-file.json
```

Don't write body definitions inside the RAML files directly.





