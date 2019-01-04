#include <stdlib.h>
#include <netinet/in.h>
#include <sys/socket.h>
#include <stdio.h>
#include <string.h>
#include <arpa/inet.h>

#define SERV_UDP_PORT 8765
#define BUFF_SIZE 1024

void err_sys(const char *x)
{
    perror(x);
    exit(1);
}

void Inet_pton(int family, const char *strptr, void *addrptr)
{
    if (inet_pton(family, strptr, addrptr) < 0)
        err_sys("inet_pton error");
}

char *Fgets(char *buff, int bytes, FILE *fp)
{
    char *rbuff;
    if ((rbuff = fgets(buff, bytes, fp)) == NULL && ferror(fp))
        err_sys(rbuff);
    return buff;
}

void Fputs(const char *ptr, FILE *stream)
{
    if (fputs(ptr, stream) == EOF)
        err_sys("fputs error");
}

int Socket(int family, int type, int protocol)
{
    int n;
    n = socket(family, type, protocol);
    
    if(n < 0)
        err_sys("create socket error");
    return n;
}

int Bind(int sockfd, const struct sockaddr *servaddr, socklen_t addrlen)
{
    int n;
    n = bind(sockfd, servaddr, addrlen);
    if(n < 0)
        err_sys("bind error");

    return n;
}

ssize_t Recvfrom(int sockfd, void *buff, size_t nbytes, int flags, struct sockaddr *from, socklen_t *addrlen)
{
    ssize_t n;
    n = recvfrom(sockfd, buff, nbytes, flags, from, addrlen);
    if(n < 0)
        err_sys("recvfrom error");
    
    return n;
}

void Sendto(int sockfd, void *buff, size_t nbytes, int flags, struct sockaddr *to, socklen_t addrlen)
{
    if(sendto(sockfd, buff, nbytes, flags, to, addrlen) != (ssize_t) nbytes)
        err_sys("sendto error");
}

void dg_echo(int sockfd, struct sockaddr *pcliaddr, socklen_t clilen)
{
    ssize_t n;
    socklen_t len;
    char msg[BUFF_SIZE];
    
    while(1){
        bzero(&msg, BUFF_SIZE);
        len = clilen;
        n = Recvfrom(sockfd, msg, BUFF_SIZE, 0, pcliaddr, &len);
        Fputs(msg, stdout);
        Sendto(sockfd, msg, n, 0, pcliaddr, len);
    }
}

void dg_cli(FILE *fp, int sockfd, struct sockaddr *pservaddr, socklen_t servlen)
{
    int n;
    char sendline[BUFF_SIZE], recvline[BUFF_SIZE + 1];
    while(Fgets(sendline, BUFF_SIZE, fp)){
        Sendto(sockfd, sendline, strlen(sendline), 0, pservaddr, servlen);

        n = Recvfrom(sockfd, recvline, BUFF_SIZE, 0, NULL, NULL);
        recvline[n] = 0;
        Fputs(recvline, stdout);
    }
}