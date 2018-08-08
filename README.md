# Amoeba method optimization
## What it does?
Amoeba by the three points captures the target placed randomly on the canvas. It uses simple algorithm known else as a "Nelder-Mead method".
## Pseudocode:
```
generate amoebaSize random solutions
while not done loop
  compute centroid
  compute reflected
  if reflected is better than best solution then
    compute expanded
    replace worst solution with better of reflected, expanded
  else if reflected is worse than all but worst then
    if reflected is better than worst solution then
      replace worst solution with reflected
    end if
    compute contracted
    if contracted is worse than worst
      shrink the amoeba
    else
      replace worst solution with contracted
    end if
  else
    replace worst solution with reflected
  end if
end loop
return best solution found
```

### Sources:
https://www.youtube.com/watch?v=bVDX_UwthZI
https://msdn.microsoft.com/en-us/magazine/dn201752.aspx
