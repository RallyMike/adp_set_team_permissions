add_team_member
=========================

Random App Name80497
=========================

## Overview
As an administrator, I want team members to be able to manage permissions to their team project in Rally.  This App
will gather the requesting user's ID and workspace ID as well as the project ID, user ID, and role to add permissions
for.  This information is used as parameters to a backend ADP utility which connects to Rally with admin privileges,
validates the request, and applies the permission change.

NOTE: The App GUI currently only builds the command string.  It needs to be extended to invoke the utility located
on a remote server.

## License

AppTemplate is released under the MIT license.  See the file [LICENSE](https://raw.github.com/RallyApps/AppTemplate/master/LICENSE) for the full text.
