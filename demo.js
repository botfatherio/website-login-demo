function main()
{
	// Validate the user script configuration
	if (!Config.getValue("username") || !Config.getValue("password"))
	{
		Helper.log("Please provide a Botfather username and password in the bots 'Config' tab.");
		return;
	}

	// Load the Botfather login page
	Browser.loadUrl("https://botfather.io/accounts/login/");
	Browser.finishLoading();

	// Fill out the username and password field
	var u = Config.getValue("username");
	var p = Config.getValue("password");

	Browser.executeJavascript("document.getElementById('id_username').value = '" + u + "';");
	Browser.executeJavascript("document.getElementById('id_password').value = '" + p + "';");

	// Submit the form
	Browser.executeJavascript("document.getElementById('id_password').form.submit();");
	Helper.sleep(2);
	Browser.finishLoading();

	// Tell the script user whether login succeeded or not
	if (Browser.getUrl().toString().indexOf("/accounts/login") !== -1)
	{
		Helper.log("Looks like login failed. Open the browser to check for yourself.");
		return;
	}

	Helper.log("Success! You're logged in. Open the browser to check for yourself.")
}
main();