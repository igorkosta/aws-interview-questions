# REST

Representational state transfer (REST) is a software architectural style that defines a set of constraints to be used for creating Web services.

The term representational state transfer was introduced and defined in 2000 by Roy Fielding in his doctoral dissertation. Fielding's dissertation explained the REST principles that were known as the **HTTP object model** beginning in 1994, and were used in designing the HTTP 1.1 and Uniform Resource Identifiers (URI) standards.

REST is an architectural style, while SOAP is a protocol. REST is not a standard in itself, but RESTful implementations make use of standards, such as HTTP, URI, JSON, and XML. Many developers also describe their APIs as being RESTful, even though these APIs actually don't fulfil all of the architectural constraints described below (especially the uniform interface constraint).

## Architectural Constraints
There are 6 guiding constraints that define a RESTful system. Any system that
violates any of the required constrains cannot be considered RESTful.

### Client-server architecture
See also: Client–server model
The principle behind the client-server constraints is the separation of concerns. Separating the user interface concerns from the data storage concerns improves the portability of the user interfaces across multiple platforms. It also improves scalability by simplifying the server components. Perhaps most significant to the Web is that the separation allows the components to evolve independently, thus supporting the Internet-scale requirement of multiple organizational domains.[3]

### Statelessness
See also: Stateless protocol
The client-server communication is constrained by no client context being stored on the server between requests. Each request from any client contains all the information necessary to service the request, and the session state is held in the client. The session state can be transferred by the server to another service such as a database to maintain a persistent state for a period and allow authentication. The client begins sending requests when it is ready to make the transition to a new state. While one or more requests are outstanding, the client is considered to be in transition. The representation of each application state contains links that can be used the next time the client chooses to initiate a new state-transition.[11]

### Cacheability
See also: Web cache
As on the World Wide Web, clients and intermediaries can cache responses. Responses must, implicitly or explicitly, define themselves as either cacheable or non-cacheable to prevent clients from providing stale or inappropriate data in response to further requests. Well-managed caching partially or completely eliminates some client-server interactions, further improving scalability and performance.

### Layered system
See also: Layered system
A client cannot ordinarily tell whether it is connected directly to the end server, or to an intermediary along the way. If a proxy or load balancer is placed between the client and server, it won't affect their communications and there won't be a need to update the client or server code. Intermediary servers can improve system scalability by enabling load balancing and by providing shared caches. Also, security can be added as a layer on top of the web services, and then clearly separate business logic from security logic.[12] Adding security as a separate layer enforces security policies. Finally, it also means that a server can call multiple other servers to generate a response to the client.

### Code on demand (optional)
See also: Client-side scripting
Servers can temporarily extend or customize the functionality of a client by transferring executable code: for example, compiled components such as Java applets, or client-side scripts such as JavaScript.

### Uniform interface
The uniform interface constraint is fundamental to the design of any RESTful system.[3] It simplifies and decouples the architecture, which enables each part to evolve independently. The four constraints for this uniform interface are:

- Resource identification in requests
Individual resources are identified in requests, for example using URIs in RESTful Web services. The resources themselves are conceptually separate from the representations that are returned to the client. For example, the server could send data from its database as HTML, XML or as JSON—none of which are the server's internal representation.
- Resource manipulation through representations
When a client holds a representation of a resource, including any metadata attached, it has enough information to modify or delete the resource's state.
- Self-descriptive messages
Each message includes enough information to describe how to process the message. For example, which parser to invoke can be specified by a media type.
- Hypermedia as the engine of application state (HATEOAS)
Having accessed an initial URI for the REST application—analogous to a human Web user accessing the home page of a website—a REST client should then be able to use server-provided links dynamically to discover all the available resources it needs. As access proceeds, the server responds with text that includes hyperlinks to other resources that are currently available. There is no need for the client to be hard-coded with information regarding the structure or dynamics of the application.

## HTTP Status Codes
All HTTP response status codes are separated into five classes or categories. The first digit of the status code defines the class of response, while the last two digits do not have any classifying or categorization role. There are five classes defined by the standard:

- 1xx informational response – the request was received, continuing process
- 2xx successful – the request was successfully received, understood, and accepted
- 3xx redirection – further action needs to be taken in order to complete the request
- 4xx client error – the request contains bad syntax or cannot be fulfilled
- 5xx server error – the server failed to fulfil an apparently valid request

## Sources
- [https://en.wikipedia.org/wiki/Representational_state_transfer](https://en.wikipedia.org/wiki/Representational_state_transfer)
- [https://en.wikipedia.org/wiki/List_of_HTTP_status_codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
