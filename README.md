# Architecture independent Azure SQL binary driver

This is a binary distribution of Microsoft's
[node-sqlserver](https://github.com/WindowsAzure/node-sqlserver) for Node 0.8,
patched so as to run on both x86 and x64 systems. This allows the development,
the testing and the deployment environments to be of different architectures.

The natural solution for this problem would be to distribute the code and
recompile on each environment. This ends up being unpratical because of the
dependencies for compiling node-sqlserver, which include a distribution of
Visual Studio 2010.

## Dependencies

The binaries were [compiled by
Microsoft](http://www.microsoft.com/en-us/download/details.aspx?id=29995). The
list of dependencies is

 * Node.JS Runtime 0.8 ([0.8.19](http://nodejs.org/dist/v0.8.19/) recommended,
   as it's the most recent version of the 0.8 series available in Azure)
 * Microsoft SQL Server 2012 Native Client available in the [SQL Server 2012
   Feature
   Pack](http://www.microsoft.com/en-us/download/details.aspx?id=29065).
 * Any edition of SQL Server 2005 or later.

## Local test

Before running the server, `connectionString` in `server.js` must be set to
match your SQL Azure login credentials.

If the dependencies have been correctly installed on your machine and the login
credentials are correct, running

    $ node server.js

and accessing `http://localhost:1337` will present the message

    Query result - 1 

## Azure deployment

This project is an example of a deployable Azure website that queries an Azure
SQL database and prints the result. A very simple sanity test, in essence.

In a typical deployment, `node_modules` is not under source control. Instead,
the dependencies are specified in the `package.json` file. During deployment,
Azure will issue a `npm install` in the project root which will download all
the specified dependencies.

This will fail with node-sqlserver because Azure will not me able to compile
it. Hence, instead of specifying the dependency in `package.json`, we add
`node_modules\msnodesql\` to the repository. The result is a `.gitignore` that looks like

    node_modules/
    !node_modules/msnodesql/

## Copyright and license

This derivative work is hereby released under the GPLv3, as made possible by
the terms of the Apache 2.0 license of the original node-sqlserver.

Copyright (C) 2013 Jorge Azevedo

This program is free software: you can redistribute it and/or modify it under
the terms of the GNU General Public License as published by the Free Software
Foundation, either version 3 of the License, or (at your option) any later
version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with
this program. If not, see http://www.gnu.org/licenses/.
