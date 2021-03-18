# Serverless Nodejs API Project

This project have the same aim of the previous exercises, build an API with a serverless technology, for implementation was used Node js and Azure Function core tools.

## Requirements

1. Node js
2. Docker and docker-compose
3. Azure Function Core Tools

## How to run
1. Clone this repo

2. Run a docker container with our postgres Database:
    
    ```console
    docker-compose up -d
    ```

3. run the application:

    ```console
    func build
    func start
    ```

## References
- [Microsoft Azure Functions docs](https://docs.microsoft.com/en-us/azure/azure-functions/#:~:text=Azure%20Functions%20documentation%20You%20focus%20on%20the%20pieces,process%20IoT%20streams,%20manage%20message%20queues,%20and%20more.)
- [Docker documentation](https://docs.docker.com)
-[Nodejs Docs](https://nodejs.org/en/docs/)

