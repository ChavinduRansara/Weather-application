# Weather Application README

## Overview

This is a simple weather application that retrieves weather information from [openweathermap.org](https://openweathermap.org/) using city codes from a JSON file. The application provides a user interface to view the latest weather information for various cities.

## Prerequisites

Before using the application, make sure you have the following installed:

- [Docker](https://www.docker.com/)

## Usage

### 1. Build Docker Image

To run the application, you need to build a Docker image. Navigate to the project directory and run the following command to build the image:

```bash
docker build .
```
### 2. List Docker Images

After building the Docker image, you can list all available Docker images to find the ID of the image you just created:

```bash
docker images
```

### 3. Running the Application

To run the application, follow these steps:

1. After building the Docker image, you need to run a Docker container with the image you've created. Replace `<port number>` with the desired port number and `<image id>` with the ID of the Docker image you built.

```bash
docker run -p <port number>:3000 <image id>
```

