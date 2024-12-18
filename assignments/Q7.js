class User {
    constructor(username, password) {
      this.username = username;
      this._password = password; // Private variable to store password
    }
  
    // Getter for password, returns the password masked with asterisks
    get password() {
      return '*'.repeat(this._password.length);
    }
  
    // Setter for password, checks validity before setting it
    set password(newPassword) {
      const isValid = newPassword.length >= 8 && 
                      /[A-Z]/.test(newPassword) && 
                      /\d/.test(newPassword);
  
      if (isValid) {
        this._password = newPassword; // Set the new password if valid
      } else {
        console.error("Error: Password must be at least 8 characters long, contain at least one number and one uppercase letter.");
      }
    }
  }
  
  // Example usage:
  const user = new User('john_doe', 'InitialPass1');
  console.log(user.password);  // Prints: ************** (masked password)
  
  user.password = 'NewPass123';  // Sets a new valid password
  console.log(user.password);  // Prints: *********** (masked password)
  
  user.password = 'short';  // Error: Password does not meet the criteria
  