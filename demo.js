function main()
{
	// Validate the user script configuration
	if (!Config.getValue("username") || !Config.getValue("password"))
	{
		Helper.log("Please provide a Botfather username and password in the bots 'Config' tab.");
		return;
	}

	// Load the Botfather login page
	var browser = new Browser("Main Browser", new Site(1200, 800));
	browser.loadUrl("https://botfather.io/accounts/login/");
	browser.finishLoading();

	// Fill out the username and password field
	var u = Config.getValue("username");
	var p = Config.getValue("password");

	browser.executeJavascript("document.getElementById('id_username').value = '" + u + "';");
	browser.executeJavascript("document.getElementById('id_password').value = '" + p + "';");

	// Submit the form
	browser.executeJavascript("document.getElementById('id_password').form.submit();");
	Helper.sleep(2);
	browser.finishLoading();

	// Tell the script user whether login succeeded or not
	if (browser.getUrl().toString().indexOf("/accounts/login") !== -1)
	{
		Helper.log("Looks like login failed. Open the browser to check for yourself.");
		return;
	}

	Helper.log("Success! You're logged in. Open the browser to check for yourself.")
}
main();