# Exercise 4

1. Add a new method to the Couleurs Service. The method name should be "remove" and accept a couleur id.

2. Using the "delete" method, pass the couleur id as a path parameter in the URL

For Example:

http://localhost:3060/colors/2

Would delete a couleur with an id of 2

3. Update the Couleur Home to use the new remove method of the couleurs service when doing a remove. Be sure to refresh the couleur list after the remove!

4. Upgrade the remove to use pipe like we did for append.

5. Ensure it works!