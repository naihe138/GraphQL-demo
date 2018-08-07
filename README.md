
#### [中文文档](./README-cn.md)


GraphQL one kind of language you use query API born, 2018 has come, GraphQL applications may also not be far away. One of the biggest features of the development of the front-end is that it changes quickly, and sometimes it has to deal with changes in various demand scenarios, and has to develop many versions or modifications to the interface. Various businesses rely on a strong underlying data platform to grow rapidly, and how to efficiently provide data support for various services is a concern for everyone. Moreover, the front-end solution is to componentize the view. Each line of business can be either the user of the component or the producer of the component. If the common content can be extracted and provided to each business party for repeated use, it will be able to Save valuable development time and development manpower. Then the problem comes. The front-end implements cross-business reuse through components. How does the back-end interface improve development efficiency accordingly? GraphQL, it is a new way to deal with complex scenes.

Official explanation:

>GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

Here are some of the benefits of GraphQL:

* Ask for what you need, get exactly that

* Get many resources in a single request

* Describe what’s possible with a type system

* Move faster with powerful developer tools

* API evolution does not require a version


This article will be used with koa to implement a GraphQL query example, gradually from the simple kao service to mongodb data insertion query to the use of GraphQL,
Let everyone quickly see:

* Build a koa to build a backstage project
* Simple routing method
* Simple operation mongodb with mongoose
* Getting started with GraphQL

The project is shown below

1、Build GraphQL tool query interface。

![](https://user-gold-cdn.xitu.io/2018/1/2/160b58e712e0db1a?w=1173&h=855&f=gif&s=1376761)

2、The front end uses jq to send ajax usage


![](https://user-gold-cdn.xitu.io/2018/1/2/160b5927554c21cc?w=962&h=716&f=gif&s=2278918)


## install 

````
git clone https://github.com/naihe138/GraphQL-demo.git

npm install 

node start

````
