package runners2;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions
			(features = "src\\test\\java\\features\\NewAccount.feature",
			glue = "steps2",
		// tags = "",
		monochrome = true,
		dryRun = false, 
		plugin = {
				"pretty",
				"html:target/cucumber", 
				"json:target/cucumber.json" })
public class Runner {

}
