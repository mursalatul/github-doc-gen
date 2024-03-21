const { spawn } = require('child_process');
const path = require('path');

// Run a Python script and return output
function runPythonScript(scriptName) {
  // Construct the full path to the Python script
  const scriptPath = path.resolve(__dirname, scriptName);

  // Use child_process.spawn method from 
  // child_process module and assign it to variable
  const pyProg = spawn('python', [scriptPath]);

  // Collect data from script and print to console
  let data = '';
  pyProg.stdout.on('data', (stdout) => {
    data += stdout.toString();
  });

  // Print errors to console, if any
  pyProg.stderr.on('data', (stderr) => {
    console.log(`stderr: ${stderr}`);
  });

  // When script is finished, print collected data
  pyProg.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
    console.log(data);
  });
}


function executeCommands() {
  try {
    // Remove __pycache__
    execSync('rm -rf __pycache__');
    
    // Configure git user
    execSync('git config --local user.email "action@github.com"');
    execSync('git config --local user.name "GitHub Action"');
    
    // Add changes to git
    execSync('git add .');
    
    // Commit changes
    execSync('git commit -m "auto update documentation"');
    
    // Push changes
    execSync('git push');
    
    console.log('Commands executed successfully.');
  } catch (error) {
    console.error('Error executing commands:', error.message);
  }
}


// Run the Python file
runPythonScript('UPDATE_DOC.py');

// Call the function to execute the commands
executeCommands();