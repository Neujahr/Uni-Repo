---
tags:
  - sem/ws2324
---
Topic: OOAD
Date: 
Course: Informatik

---
# V1

## Software Development Lifecycle (SDLC)
	1- The requirements of a new feature are understood
	2- It is designed, implemented and tested
	3- Once completed, it is deployed to the production system and operated
This is done continuously through an interactive process

![[OOAD -SDLC.png]]


## Objekt-Orientierte Analyse und Design
**Ziel:** Designing and implementing Maintainable Software Systems continuously
**Contents:** 
- Presents tools, practices and methods for the phases requirements analysis, design, implementation
- Methods and practices to come up with good requirements
- Practices and methods to make it maintainable
- UML as a tool for discussing software design within teams (just enough UML)
- Design principles that promote maintainability and changeability
- Design patterns as solutions to common design problems 


# What is Software Engineering?

*Definition nach Ian Sommerville:*
	Software Engineering is an Engineering discipline that is concerned with all aspects of software production from the early stages of system specification through to maintaining the system after it has gone into use. 

Two highlights from the definition:
 1. **Engineering discipline** 
- Engineers make things work!
- They apply theories, methods and tools where these are appropriate
 They look for solutions to problems <font color=DC143C>even when there are no applicable theories and methods</font>
- Engineers also recognize that solution must work within organizational and financial constraints
 2. **..All aspects of software production...**
- Software Engineering is not just concerned with the technical process of dsoftware development
- It also includes activities suft as software project management and the development of tools, methods and theories to support software development, evolution, operation and maintenance.

## Engineering discipline: Organizational and Financial contraints

### The Iron Triangle of project management![[OOAD - SW Quality Triangle.png]]
It proclaims that:
1.  The quality of a project's results is contrained by its:
    - Cost (available: budget, engineers, other resources)
    - Time (available time, deadline)
    - Scope (features, provided functionality)
2. PM can trade between constraints
3. <font color=DC143C>Changes in one constraint require changes in others or quality will suffer.</font> 

The Iron Triangle and Software Engineering -> Software Engineering <font color=DC143C>recognizes</font> organizational and financial constraints.

## All Aspects of Software Production: SDLC

The software development lifecycle (SDLC) defines phases that all software or individual features go through, the phases are

1.  **Requirements analysis** -> *Understand what your client wants/needs*
    - Identifying and capturing requirements through client interactions 
    - Clearly defining and documenting requirements
2. **Design** -> *Design a solution that meets functional/non-functional requirements*
    - Designing and documenting the system architecture based on requirements
    - Made on different levels (system/components levels, class/code level)
    - Documentation may be done using well knowndiagrams like UML
3. **Implementation** -> *Actually build the system meeting the required goals*
    - Actual code is written, the system is built
    - Unit test is performed, i.e. veryfying the code based on requirements
4. **Testing** -> *Ensure that the whole system meets all requirements*
    - Testing the system as a whole through series of system tests
    - Reporting and fixing all forms of bugs and defects
5. **Maintenance/Operation** ->  *The system serves its purpose (earns money)*
    - Deliver system to the client (shipping to client, provisioning over the internet)
    - Observation to identify bugs, malfunctions, opportunities for improvement

This lecture will focus primarily on the phases requirement analysis, design and implementation. Other phases of the SDLC will be addressed in the lecture Software Engineering

### Quality and Requirements in Software Engineering

 - Success measured by <FONT COLOR="#ff0000">Client Satisfaction</FONT>, connected to Requirements Fulfillment. There are two types of requirements:
 -  Distinction between FR and NFR not always clear, eg. NRF for security may cause FR for user authentication/authorization. 
#### Functional Requirements (FR)
- Describe system’s features/use cases e.g smartphone needs to be able to place calls, staff membrs should be uniquely identified
- Different levels of detail depending on project’s necessity
- Ambiguity specification = clash between SEs and Client
- Often are what the <FONT COLOR="#ff0000">client is most interested in</FONT>, easiest to change
- 
#### Non-Functional Requirements (NFR)
- Often more critical than FRs, harder to change later
- Characteristics of system as a whole, not related to functionality e.g security, performance, maintainability
- Afftect overall architecture
	-  High Availability = more complex distributed systems arch
	- Real-time reqs = minimize communication between components
- <FONT COLOR="#ff0000">Not meeting NFR could make the whole system unusable/unfit</FONT>
- Most clients understand importance of NFR














#### ISO 25010 - Software Product Quality
-  Functional Stability
-  Performance Efficiency
- Compatibility
- Usability
- Reliability
- Security
- <FONT COLOR="#ff0000">Maintainability</FONT> → Most important quality characteristic for OOAD
- Portability

> [!NOTE]
>  Maintainability comprised by 5 aspects: Modularity, Reusability, Analysability, Modifiability, Testability

* Modularity: Degree to which a system or computer program is composed of discrete
components such that a change to one component has minimal impact on other
components
- Reusability: Degree to which an asset can be used in more than one system or in building
other assets
- Analysability: Degree of effectiveness and efficiency with which it is possible to assess the
impact on a product or system of an intended change to one or more of its parts or to
diagnose a product for deficiencies or causes of failures or to identify parts to be modified
- Modifiability: Degree to which a product or system can be effectively and efficiently
modified without introducing defects or degrading existing product quality
- Testability: Degree of effectiveness and efficiency with which test criteria can be
established for a system, product or component and tests can be performed to determine
whether those criteria have been met

## Software Processes - Traditional

1950s → SW developed alongside HW
Goal: Create whole product in one single project
Waterfall Model
	Sequential execution of phases of SDLC
	Each phase fully executed in the right order
	each phase concluded with documentation specifying results
	Changes only possible between two adjacent phases
<FONT COLOR="#ff0000">Communication primarily through docs → significant overhead</FONT>

### Handling of change: implications
<FONT COLOR="#ffa500"><b>Initial project is completed - Customer is not happy</b></FONT> 
The product does not fit the needs of the client → Can we fix that?
		A whole new project starts with requirements analysis, vulnerable to the same problems as the last. 
		4 months have passed, requirements ahve hange dagain. 
		