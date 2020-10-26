# Databases
Database types, sometimes referred to as database models or database families, are the patterns and structures used to organize data within a database management system. Many different database types have been developed over the years. Some are mainly historic predecessors to current databases, while others have stood the test of time. In the last few decades, new types have been developed to address changing requirements and different use patterns.

## CAP theorem
In theoretical computer science, the CAP theorem, also named Brewer's theorem after computer scientist Eric Brewer, states that it is impossible for a distributed data store to simultaneously provide more than two out of the following three guarantees:

- **Consistency**: Every read receives the most recent write or an error
- **Availability**: Every request receives a (non-error) response, without the guarantee that it contains the most recent write
- **Partition tolerance**: The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes

When a network partition failure happens should we decide to
- Cancel the operation and thus decrease the availability but ensure consistency
- Proceed with the operation and thus provide availability but risk inconsistency

The CAP theorem implies that in the presence of a network partition, one has to choose between consistency and availability. Note that consistency as defined in the CAP theorem is quite different from the consistency guaranteed in [ACID](https://en.wikipedia.org/wiki/ACID) database transactions.

## Flat-File Based
## Hierarchical
## Network
## Relational
## NoSQL
## Graph
## NewSQL

## Sources
- [https://www.prisma.io/dataguide/intro/comparing-database-types](https://www.prisma.io/dataguide/intro/comparing-database-types)
- [https://stackoverflow.com/questions/34985464/difference-between-a-database-a-storage-engine](https://stackoverflow.com/questions/34985464/difference-between-a-database-a-storage-engine)
