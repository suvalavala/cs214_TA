# Threshold Algorithm Interactive Demo

A web-based interactive visualization demonstrating the performance comparison between Threshold Algorithm (TA) and SQL-based approaches for top-k rank aggregation.

🔗 [Live Demo](https://suvalavala.github.io/cs214_TA/)

## Overview

This interactive demo showcases the implementation and performance characteristics of the Threshold Algorithm compared to traditional SQL-based methods for solving top-k rank aggregation problems. The demo allows users to experiment with different dataset sizes and configurations while visualizing real-time performance metrics.

## Features

- **Interactive Parameter Selection**
  - Number of Objects (1,000 - 10,000)
  - Number of Rankings (5 - 20)
  - Top-K Value (5 - 20)

- **Real-time Visualization**
  - Performance comparison charts
  - Runtime metrics
  - Algorithm step visualization

- **Performance Metrics**
  - Threshold Algorithm runtime
  - SQL reference runtime
  - Performance improvement calculations

## Technology Stack

- HTML5
- CSS3
- JavaScript
- Chart.js for data visualization

## Getting Started

### Running Locally

1. Clone the repository:
```bash
git clone https://github.com/suvalavala/cse214_ThresholdAlgo.git
```

## Implementation Details

### Threshold Algorithm

The implementation includes:
* Sorted access to ranked lists
* Early termination condition
* Dynamic threshold calculation 
* Efficient score aggregation

### Performance Comparison

The demo compares the Threshold Algorithm against SQL-based approaches using:
* Different dataset sizes
* Various ranking configurations
* Multiple top-k values

## Research Context

This demo is part of a research project comparing the efficiency of different top-k rank aggregation methods. The full research findings, including detailed performance analysis and methodology, are available in the associated documentation.

## Author

Suryakiran Valavala

## Acknowledgments

* Based on research by Fagin et al. on optimal aggregation algorithms
* Implementation guidance from CSE 214 course materials
Author
Suryakiran Valavala
Acknowledgments

Based on research by Fagin et al. on optimal aggregation algorithms
Implementation guidance from CSE 214 course materials
