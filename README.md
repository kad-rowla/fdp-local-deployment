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

## Project Architecture

The following illustrates the overall architecture of this project in the Kadaster context:

Figure 1: Project Architecture in Kadaster's Context
![image](https://user-images.githubusercontent.com/74549995/114614386-b9c1fd80-9ca4-11eb-907a-a12ec5976138.png)

## Important notes

For more information on the overall vision for the FDP, see [FDP Docs](https://fairdatapoint.readthedocs.io/)
