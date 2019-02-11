Dear Mike,

Attached is an updated version of the Stata code which I sent you back in March. This has the BRCA coefficient added, as well as the new formula for percentage positive cores (PPC). Providing you're on row 1, if you click 'execute(do)' in stata it will run the whole code. I've set it up to then present the output for estimated cumulative PCa, non-PCa and all cause mortality on the main command screen.

As you'll see, I've had to set it up such that if PPC is unknown the average value (~42%) is entered, rather than omitting the biopsy effect completely. I couldn't think of a work-around for this. The dichotomous 50% cutoff ('biopsy50') is currently still included in this code, as its part of the manuscript still under review, but provided biopsy50 is set as '0' it has no impact and can be ignored.

Hope this all makes sense. Please let me know of any queries.

Best regards,

David