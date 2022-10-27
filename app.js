/*
    In this activity, you will be making a simple fetch api call to the url provided to request some data stored there.
    In the first stage of this challenge, your task is to use the provided code to make the fetch request and then console log the data.
    If your team has time, update our code using the async/await keywords!
*/

const makeCall = async () => {
  // Use the fetch api to display some simple user data to the console!
  try {
    const response = await fetch("https://reqres.in/api/users");
    if (response.ok) {
      const jsonResponse = await response.json();
      return console.log(jsonResponse);
    }
    throw new Error("Request failed!");
  } catch (error) {
    console.log(error);
  }
  // console.log an error message in case something goes wrong.
};
