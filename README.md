# Architecture independent Azure SQL binary driver

This is a binary distribution of Microsoft's
[node-sqlserver](https://github.com/WindowsAzure/node-sqlserver), patched to run
on both x86 and x64 systems.

Node 0.10.x is the latest version supported. A backport to the 0.8 series using
the [official Microsoft
binaries](http://www.microsoft.com/en-us/download/details.aspx?id=29995) is
available in the `node-0.8-series` branch.

## Dependencies

 * Node.JS Runtime 0.10.x ([0.10.5](http://nodejs.org/dist/v0.10.5/)
   recommended, as it's the most recent version available in Azure)
 * Microsoft SQL Server 2012 Native Client available in the [SQL Server 2012
   Feature Pack](http://www.microsoft.com/en-us/download/details.aspx?id=29065).
 * Any edition of SQL Server 2005 or later.

## Local test

Before running the server, `connectionString` in `server.js` must be set to your
SQL Azure login credentials. An example would be

    var connectionString = "Driver={SQL Server Native Client 11.0};Server=tcp:?.database.windows.net,1433;Database=?;Uid=?;Pwd=?";

If the dependencies have been correctly installed on your machine and the login
credentials are correct, running

    $ node server.js

and accessing `http://localhost:1337` will present a message similar to

    node v0.10.5 x64.
    Query result - 1 

## Azure deployment

This project is an example of a deployable Azure website that queries an Azure
SQL database and prints the result. A very simple sanity test, in essence.

In a typical deployment, `node_modules` is not under source control. Instead,
the dependencies are specified in the `package.json` file. During deployment,
Azure will issue a `npm install` in the project root which will download all the
specified dependencies.

This will fail with node-sqlserver because Azure will not me able to compile it.
Hence, instead of specifying the dependency in `package.json`, we add
`node_modules\msnodesql\` to the repository. The result is a `.gitignore` that
looks like

    node_modules/
    !node_modules/msnodesql/

## Copyright and license

This derivative work is hereby released under the MIT license, as made possible by the
terms of the Apache 2.0 license of the original node-sqlserver.

Terms available for review in LICENSE
