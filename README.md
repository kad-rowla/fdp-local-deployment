# Kadaster FDP Local Deployment Configuration

This is an example deployment of Kadasters FDP instance for a usage on a local machine. It contains images from [FAIR Data Point](https://fairdatapoint.readthedocs.io/) (FDP).

If you want to see a mock-up of how this might run in production, please use [the production deployment configuration](https://github.comkad-rowla/fdp-production-deployment).

## Instructions

**1. Clone repository**

```
$ git clone https://github.com/kad-rowla/fdp-local-deployment.git
```

**2. Run docker**

```
$ docker-compose up -d
```

**3. Open browser**

- FAIR Data Point
  - Default username:`nikola.tesla@example.com`
  - Default password `password`.

## Important notes

For more information on the overall vision for the FDP, see [FDP Docs](https://fairdatapoint.readthedocs.io/)

The following illustrates the overall architecture of this project in the Kadaster context. 
![image](https://user-images.githubusercontent.com/74549995/114609469-24703a80-9c9f-11eb-99b7-c17cc1073a09.png)

