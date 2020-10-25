# UDP vs. TCP

## UDP
User Datagram Protocol (UDP) is a connectionless protocol that works just like TCP but assumes that error-checking and recovery services are not required. Instead, UDP continuously sends datagrams to the recipient whether they receive them or not.

## TCP
Transmission Control Protocol (TCP) is a connection-oriented protocol that computers use to communicate over the internet. It is one of the main protocols in TCP/IP networks. TCP provides error-checking and guarantees delivery of data and that packets will be delivered in the order they were sent.

## Differences
TCP and UDP have many differences and similarities. They are the most commonly used protocols for sending packets over the internet. They both work on the transport layer of the TCP/IP protocol stack and both use the IP protocol.

### Connection and connectionless
TCP is a connection-oriented protocol and UDP is a connection-less protocol. TCP establishes a connection between a sender and receiver before data can be sent. UDP does not establish a connection before sending data.

### Reliability
TCP is reliable. Data sent using a TCP protocol is guaranteed to be delivered to the receiver. If data is lost in transit it will recover the data and resend it. TCP will also check packets for errors and track packets so that data is not lost or corrupted.

UDP is unreliable, it does not provide guaranteed delivery and a datagram packet may become corrupt or lost in transit.

### Flow control
TCP uses a flow control mechanism that ensures a sender is not overwhelming a receiver by sending too many packets at once. TCP stores data in a send buffer and receives data in a receive buffer. When an application is ready, it will read the data from the receive buffer. If the receive buffer is full, the receiver would not be able to handle more data and would drop it. To maintain the amount of data that can be sent to a receiver, the receiver tells the sender how much spare room in the receive buffer there is (receive window). Every time a packet is received, a message is sent to the sender with the value of the current receive window.

UDP does not provide flow control. With UDP, packets arrive in a continuous stream or they are dropped.

### Ordering
TCP does ordering and sequencing to guarantee that packets sent from a server will be delivered to the client in the same order they were sent. On the other hand, UDP sends packets in any order.

### Speed
TCP is slower than UDP because it has a lot more to do. TCP has to establish a connection, error-check, and guarantee that files are received in the order they were sent.

### Usage
TCP is best suited to be used for applications that require high reliability where timing is less of a concern.
- World Wide Web (HTTP, HTTPS)
- Secure Shell (SSH)
- File Transfer Protocol (FTP)
- Email (SMTP, IMAP/POP)

UDP is best suited for applications that require speed and efficiency
- VPN tunneling
- Streaming videos
- Online games
- Live broadcasts
- Domain Name System (DNS)
- Voice over Internet Protocol (VoIP)
- Trivial File Transfer Protocol (TFTP)

## Sources
https://www.privateinternetaccess.com/blog/tcp-vs-udp-understanding-the-difference
