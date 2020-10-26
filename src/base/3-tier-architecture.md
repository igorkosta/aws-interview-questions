# Three-tier Architecture

## Intro
In software engineering, multitier architecture (often referred to as n-tier architecture) or multilayered architecture is a client–server architecture in which presentation, application processing and data management functions are physically separated. The most widespread use of multitier architecture is the three-tier architecture.

## Tiers
- **Presentation Tier** - The presentation tier is the front end layer in the 3-tier system and consists of the user interface. This user interface is often a graphical one accessible through a web browser or web-based application and which displays content and information useful to an end user. This tier is often built on web technologies such as HTML5, JavaScript, CSS, or through other popular web development frameworks, and communicates with others layers through API calls.
- **Application Tier** - The application tier contains the functional business logic which drives an application’s core capabilities. It’s often written in Java, .NET, C#, Python, C++, etc.
- **Data Tier** - The data tier comprises of the database/data storage system and data access layer. Examples of such systems are MySQL, Oracle, PostgreSQL, Microsoft SQL Server, MongoDB, etc. Data is accessed by the application layer via API calls.

## Web Development
In the web development field, three-tier is often used to refer to websites, commonly electronic commerce websites, which are built using three tiers:

- A front-end web server serving static content, and potentially some cached dynamic content. In web-based application, front end is the content rendered by the browser. The content may be static or generated dynamically.
- A middle dynamic content processing and generation level application server (e.g., Symfony, Spring, ASP.NET, Django, Rails, Node.js).
- A back-end database or data store, comprising both data sets and the database management system software that manages and provides access to the data.

## Benefits
N-tier application architecture provides a model by which developers can create flexible and reusable applications. By segregating an application into tiers, developers acquire the option of modifying or adding a specific layer, instead of reworking the entire application. A three-tier architecture is typically composed of a presentation tier, a domain logic tier, and a data storage tier.

Scalability is another great advantage of a 3-layer architecture. By separating out the different layers you can scale each independently depending on the need at any given time. For example, if you are receiving many web requests but not many requests which affect your application layer, you can scale your web servers without touching your application servers. Similarly, if you are receiving many large application requests from only a handful of web users, you can scale out your application and data layers to meet those requests without touch your web servers. This allows you to load balance each layer independently, improving overall performance with minimal resources. Additionally, the independence created from modularizing the different tiers gives you many deployment options. For example, you may choose to have your web servers hosted in a public or private cloud while you’re application and data layers may be hosted onsite. Or you may have your application and data layers hosted in the cloud while your web servers may be locally hosted, or any combination thereof.

By having disparate layers you can also increase reliability and availability by hosting different parts of your application on different servers and utilizing cached results. With a full stack system you have to worry about a server going down and greatly affecting performance throughout your entire system, but with a 3-layer application, the increased independence created when physically separating different parts of an application minimizes performance issues when a server goes down.

## Sources
- [https://en.wikipedia.org/wiki/Multitier_architecture](https://en.wikipedia.org/wiki/Multitier_architecture)
- [https://www.jinfonet.com/resources/bi-defined/3-tier-architecture-complete-overview/](https://www.jinfonet.com/resources/bi-defined/3-tier-architecture-complete-overview/
)
