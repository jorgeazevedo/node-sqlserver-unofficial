# Unofficial binary distribution of node-sqlserver

[node-sqlserver](https://github.com/WindowsAzure/node-sqlserver) is a C++
Node.js module used to connect to MS SQL and Azure SQL databases developed by
Microsoft. It can be found on `npm` under the name
[msnodesql](https://www.npmjs.org/package/msnodesql).

This is an unofficial binary distribution of that driver. Here's why you'd want
to use it instead of the official one:

 * No need to compile from source (which requires Visual Studio and totally
   [confuses](https://github.com/WindowsAzure/node-sqlserver/issues/155)
[people](https://github.com/WindowsAzure/node-sqlserver/issues/143)).
 * It runs on both x86 and x64 and with node versions 0.8 and 0.10.
 * No [weird
   workarounds](http://geekswithblogs.net/shaunxu/archive/2012/11/16/install-npm-packages-automatically-for-node.js-on-windows-azure-web.aspx)
   needed to run on Azure web sites.

Use it on your projects via `npm`

    $ npm install node-sqlserver-unofficial

## Dependencies

To try this out locally on your machine, you'll need

 * Node.JS Runtime 0.10.x or 0.8.x ([Azure
   Websites](http://www.windowsazure.com/en-us/documentation/articles/nodejs-specify-node-version-windows-azure-apps/)
   support versions [0.10.5](http://nodejs.org/dist/v0.10.5/) and
   [0.8.19](http://nodejs.org/dist/v0.8.19/))
 * Microsoft SQL Server 2012 Native Client available in the [SQL Server 2012
   Feature Pack](http://www.microsoft.com/en-us/download/details.aspx?id=29065).

## Testing

`test/` is a deployable Azure website that queries an Azure SQL
database and displays the result like so

    node v0.10.25 ia32.
    Query result - 1

Or, in case something goes wrong, an error message like so

    node v0.10.25 ia32.
    Query Failed
    Error: [Microsoft][SQL Server Native Client 11.0][SQL Server]Incorrect syntax near 'SELECT'.

The environment is specified in `package.json` and `server.js` contains the code.

Before running this, `connectionString` in `server.js` must be set to your
SQL Azure login credentials. An example would be

    var connectionString = "Driver={SQL Server Native Client 11.0};Server=tcp:?.database.windows.net,1433;Database=?;Uid=?;Pwd=?";

I also recommend to run it locally before deploying it to Azure. Running

    $ npm install

in `test/` will resolve the dependencies to `test/node_modules/`, after which running

    $ node server.js

and accessing `http://localhost:1337` will display the result.

## Copyright and license

This derivative work is hereby released under the MIT license, as made possible by the
terms of the Apache 2.0 license of the original node-sqlserver.

Terms available for review in LICENSE.

This work is not affiliate with or endorsed by Microsoft in any way.
