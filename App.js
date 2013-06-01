// return all leaf stories of a hard-coded PI object ID


Ext.define('CustomApp', {
    extend:'Rally.app.App',
    componentCls:'app',
    layout:{
        type:'vbox',
        align:'stretch'
    },
    items:[
        {
            // dashboard container
            xtype:'container',
            itemId:'dashboardContainer',
            //style: {
            //    background: 'lightblue'
            //},
            items: [
                { // panel for current user info
                    xtype:'panel',
                    itemId:'currentUserPanel',
                    cls: 'appLabel',
                    title: "Current User Information",
                    layout: "hbox",
                    height: 80,
                    //border: 0,
                    //padding: '0 0 20 0', // top ? bottom left,
                    items: [
                        {
                            xtype: 'container',
                            itemId: 'currentUserNameContainer',
                            padding: '0 0 0 0',
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'label',
                                    cls: 'appLabel',
                                    itemId: 'currentUserLabel',
                                    text: 'Current User: ',
                                    padding: '0 0 0 20'
                                },
                                {
                                    xtype: 'label',
                                    cls: 'appSetValue',
                                    itemId: 'currentUserTextBox',
                                    padding: '0 0 0 0'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            itemId: 'currentUserIDContainer',
                            padding: '0 0 0 20',
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'label',
                                    cls: 'appLabel',
                                    itemId: 'currentUserIDLabel',
                                    text: 'Current User ID: ',
                                    padding: '0 0 0 20'
                                },
                                {
                                    xtype: 'label',
                                    cls: 'appSetValue',
                                    itemId: 'currentUserIDTextBox',
                                    padding: '0 0 0 20'
                                }
                            ]
                        }
                    ]
                },
                { // panel for selecting user/project
                    xtype:'panel',
                    itemId:'selectPanel',
                    title: "Select Project, User, and Permissions",
                    layout: 'column',
                    items: [
                        {
                            // container for selected project
                            xtype:'container',
                            itemId:'selectProjectInfoContainer',
                            columnWidth: 0.38,
                            padding: '20 0 0 20', // top ? bottom left
                            layout: 'vbox',
                            items: [
                                {
                                    // "Select Project" button
                                    xtype: 'container',
                                    itemId: "chooseProjectButtonContainer"
                                },
                                {
                                    // container for selected project label & value
                                    xtype:'container',
                                    itemId:'selectProjectContainer',
                                    layout: 'hbox',
                                    padding: '0 0 0 0', // top ? bottom left
                                    items: [
                                        {
                                            // label for selected project
                                            xtype: 'label',
                                            cls: 'appLabel',
                                            itemId: 'selectProjectLabel',
                                            text: 'Selected Project: ',
                                            padding: '0 0 0 0' // top ? bottom left
                                        },
                                        {
                                            // value of selected project
                                            xtype: 'label',
                                            cls: 'appSetValue',
                                            itemId: 'selectProjectTextBox',
                                            padding: '0 0 0 0' // top ? bottom left
                                        }
                                    ]
                                },
                                {
                                    // container for selected project ID label & value
                                    xtype:'container',
                                    itemId:'selectProjectIDContainer',
                                    layout: 'hbox',
                                    padding: '0 0 0 0', // top ? bottom left
                                    items: [
                                        {
                                            // label for selected project
                                            xtype: 'label',
                                            cls: 'appLabel',
                                            itemId: 'selectProjectIDLabel',
                                            text: 'Selected Project ID: ',
                                            padding: '0 0 0 0' // top ? bottom left
                                        },
                                        {
                                            // value of selected project
                                            xtype: 'label',
                                            cls: 'appSetValue',
                                            itemId: 'selectProjectIDTextBox',
                                            padding: '0 0 0 0' // top ? bottom left
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            // container for selected user
                            xtype:'container',
                            itemId:'selectUserInfoContainer',
                            columnWidth: 0.42,
                            padding: '20 0 0 20', // top ? bottom left
                            layout: 'vbox',
                            items: [
                            {
                                // "Select User" button
                                xtype: 'container',
                                itemId: "chooseUserButtonContainer"
                            },
                            {
                                // container for selected project label & value
                                xtype:'container',
                                itemId:'selectUserContainer',
                                layout: 'hbox',
                                padding: '0 0 0 0', // top ? bottom left
                                items: [
                                    {
                                        // label for selected user
                                        xtype: 'label',
                                        cls: 'appLabel',
                                        itemId: 'selectUserLabel',
                                        text: 'Selected User: ',
                                        padding: '0 0 0 0' // top ? bottom left
                                    },
                                    {
                                        // value of selected project
                                        xtype: 'label',
                                        cls: 'appSetValue',
                                        itemId: 'selectUserTextBox',
                                        padding: '0 0 0 0' // top ? bottom left
                                    }
                                ]
                            },
                            {
                                // container for selected user ID label & value
                                xtype:'container',
                                itemId:'selectUserIDContainer',
                                layout: 'hbox',
                                padding: '0 0 0 0', // top ? bottom left
                                items: [
                                    {
                                        // label for selected project
                                        xtype: 'label',
                                        cls: 'appLabel',
                                        itemId: 'selectUserIDLabel',
                                        text: 'Selected User ID: ',
                                        padding: '0 0 0 0' // top ? bottom left
                                    },
                                    {
                                        // value of selected project
                                        xtype: 'label',
                                        cls: 'appSetValue',
                                        itemId: 'selectUserIDTextBox',
                                        padding: '0 0 0 0' // top ? bottom left
                                    }
                                ]
                            }
]
},
                        {
                            // container for permission radio buttons
                            xtype:'panel',
                            itemId:'selectPermissionsContainer',
                            cls: 'appLabel',
                            columnWidth: 0.2,
                            title: "Permissions",
                            padding: '20 20 20 20'//,
                        }
                    ]
                },
                {
                    // container for URL to call
                    xtype:'panel',
                    itemId:'urlGrantPermissionsContainer',
                    title: "Grant/Revoke Permissions",
                    //padding: '20 0 0 20', // top ? bottom left
                    layout: 'vbox',
                    items: [
                        {
                            // container for button
                            xtype:'container',
                            itemId:'grantPermissionsButtonContainer',
                            padding: '20 0 0 20' // top ? bottom left
                        },
                        {
                            // container for label
                            xtype: 'label',
                            cls: 'appLabel',
                            itemId: 'urlToCallLabelContainer',
                            text: 'URL to Call: ',
                            padding: '0 0 0 20' // top ? bottom left
                        },
                        {
                            // container for value to set
                            xtype:'label',
                            cls: 'urlValue',
                            itemId:'urlToCallValueTextBox',
                            padding: '20 0 0 20' // top ? bottom left
                        }
                    ]
                }
            ]
        }
    ],


    // --- App global variables ---

    // example URL to call:
    // http://borg2.plaza.ds.adp.com/training1/rally_user_adm.php?ruid=10640739442&uuid=10640091139&poid=10199297262&rolt=Editor
    gURLPrefixToCall: "http://borg2.plaza.ds.adp.com/training1/rally_user_adm.php?",

    gUserName: undefined, // current user name
    gUserID: undefined, // current user ID

    gWs: undefined, // current workspace

    gSelectedProject: undefined, // selected project to designate selected user as a Team Member
    gSelectedProjectID: undefined, // selected project ID to designate selected user as a Team Member

    gSelectedUser: undefined, // selected user to designate as a Team Member of the selected Project

    // --- end global variables ---


    launch:function () {

        // main function

        // add controls to the App
        this._addAppControls();

        // get the current user's info
        this._getCurrentUser();

    }, // end launch


    // ----------------------------------------------------
    // add the initial controls to the App ()
    // ----------------------------------------------------
    _addAppControls:function (){

        // --------------------------------------------------
        // --- add controls to the current user container ---

//        // grab the container
//        var currentUserContainer = this.down('#currentUserContainer');
//
//        // add current user name to header
//        var currentUserTextBox = Ext.create('Ext.container.Container', {
//            itemId:"currentUserTextBox",
//            html:"Current User: "
//        });
//        currentUserContainer.add(currentUserTextBox);
//
//        // add current user object ID to text box
//        var currentUserIDTextBox = Ext.create('Ext.container.Container', {
//            itemId:"currentUserIDTextBox",
//            html:"Current User ID: "
//        });
//        currentUserContainer.add(currentUserIDTextBox);


        // ----------------------------------------------------
        // --- add controls to the select project container ---

        var aButtonContainer = this.down('#chooseProjectButtonContainer');

        // add "Choose Project" button to container
        aButtonContainer.add({
            xtype:'rallybutton',
            text:'Select Project',
            listeners:{
                click: this._fireSelectProject,
                scope: this
            }
        });


        // -------------------------------------------------
        // --- add controls to the select user container ---

        aButtonContainer = this.down('#chooseUserButtonContainer');

        // add "Choose User" button to container
        aButtonContainer.add({
            xtype:'rallybutton',
            text:'Select User',
            listeners:{
                click: this._fireSelectUser,
                scope: this
            }
        });


        // -------------------------------------
        // --- add permissions controls

        // grab permissions container
        var aPermissionsContainer = this.down('#selectPermissionsContainer');

        // create the radio buttons of permission types
        radioGroup = Ext.create('Ext.form.RadioGroup', {
            itemId: "permissionsRadioGroup",
            width: 400,
            //height: 325,
            //bodyPadding: 10,
            //renderTo: Ext.getBody(),
            items:[{
                xtype: 'radiogroup',
                cls: 'appLabel',
                columns: 1,
                vertical: true,
                frame: false,
                border: 1,
                //margin: '50 0 0 50',
                items: [
                    { cls: 'radioOption', boxLabel: 'Viewer', name: 'rbValue', inputValue: 'Viewer' },
                    { cls: 'radioOption', boxLabel: 'Editor', name: 'rbValue', inputValue: 'Editor' },
                    { cls: 'radioOption', boxLabel: 'Team Member', name: 'rbValue', inputValue: 'Team Member', checked: true }
                ]
            }],
            listeners:{
                change: this._fireSelectPermissions,
                scope: this
            }
        });

        // toss the permissions radio buttons onto the page
        aPermissionsContainer.add(radioGroup);


        // -------------------------------------------------
        // --- add controls to the URL to call container

        // grab the URL container
        var buttonContainer = this.down('#grantPermissionsButtonContainer');

        // add "Grant Permissions" button
        buttonContainer.add({
            xtype:'rallybutton',
            text:'Grant Permissions',
            listeners:{
                click: this._fireGrantPermissions,
                scope: this
            }
        });

//        // add URL to call text box
//        var urlTextBox = Ext.create('Ext.container.Container', {
//            itemId:"urlTextBox",
//            html: "<br><font size=3/><b>URL to Call: </b>"
//        });
//        grantContainer.add(urlTextBox);


    },


    // ----------------------------------------------------
    // get info about the user logged in running this app
    // ----------------------------------------------------
    _getCurrentUser:function () {

        // get this app's context
        var appContext = this.getContext();
        console.log(appContext);

        // grab the current user from the context
        var appUser = appContext.getUser();
        console.log(appUser);

        // grab the current workspace from the context
        var appWs = appContext.getWorkspace();
        console.log(appUser);

        // grab user's name and ID
        this.gUserName = appUser.UserName;
        this.gUserID = appUser.ObjectID;
        console.log("this.gUserName: " + this.gUserName);
        console.log("this.gUserID: " + this.gUserID);

        // grab the current workspace
        this.gWs = appWs.ObjectID;
        console.log("this.gWs: " + this.gWs);

        var currentUserTextBox = this.down('#currentUserTextBox');
        currentUserTextBox.update(this.gUserName);

        var currentUserIDTextBox = this.down('#currentUserIDTextBox');
        currentUserIDTextBox.update(this.gUserID + '');

    }, // end _getCurrentUser


    // ----------------------------------------------------
    // The Select Project button has been selected.
    // Get the list of projects the current user can add team members to.
    // NOTE: Only Team Members can add Users as Team Members.
    //       WS Admin and Sub Admins will need to use Rally's admin utilities.
    // ----------------------------------------------------
    _fireSelectProject:function () {

        console.log("_fireSelectProject --- Enter");

        // Chooser to select project to add the selected user as a team member
        Ext.create('Rally.ui.dialog.ChooserDialog', {
            artifactTypes: ['Project'],
            autoShow: true,
            title: 'Select Project',
            columns: ["Name", "ObjectID", "Workspace"],
            filterableFields: [{displayName: 'Name', attributeName: 'Name'}],
            storeConfig: {
                filters: [
                    {
                        property: 'TeamMembers',
                        operator: 'contains',
                        value: this.gUserName
                    }],
                sorters: [
                    {
                    property: 'Name',
                    direction: 'ASC'
                    }]
            },
            //constraint: true,
            //limit: 20,
            //height: 400,
            //width: 380,
            listeners:{
                artifactChosen:function (selectedRecord) {

                    // capture Project selected
                    this.gSelectedProject = selectedRecord.get('Name');
                    this.gSelectedProjectID = selectedRecord.get('ObjectID');

                    console.log("this.gSelectedProject: " + this.gSelectedProject);
                    console.log("this.gSelectedProject: " + this.gSelectedProjectID);

                    var selectProjectTextBox = this.down('#selectProjectTextBox');
                    selectProjectTextBox.update(this.gSelectedProject);

                    var selectProjectIDTextBox = this.down('#selectProjectIDTextBox');
                    selectProjectIDTextBox.update(this.gSelectedProjectID);

                },
                scope:this
            }
        });

        console.log("_fireSelectProject --- Exit");

    }, // end _fireSelectProject


    // ----------------------------------------------------
    // The Select Team Member button has been selected.
    // Get the list of users to select who to add as a Team Member.
    // ----------------------------------------------------
    _fireSelectUser:function () {

        console.log("_fireSelectUser --- Enter");

        // Chooser to select team member to add
        Ext.create('Rally.ui.dialog.ChooserDialog', {
            artifactTypes: ['User'],
            autoShow: true,
            title: 'Select User',
            columns: ["UserName", "DisplayName"],
            filterableFields: [ {displayName: 'Display Name', attributeName: 'DisplayName'},
                                {displayName: 'User Name', attributeName: 'UserName'}],
            storeConfig: {
                filters: [
                    {
                        property: 'UserName',
                        operator: '!=',
                        value: null
                    }
                ],
                sorters: [
                    {
                        property: 'UserName',
                        direction: 'ASC'
                    }
                ]
            },
            //constraint: true,
            //limit: 20,
            //height: 400,
            //width: 380//,
            listeners:{
                artifactChosen:function (selectedRecord) {

                    // capture Project selected
                    this.gSelectedUser = selectedRecord.get('UserName');
                    this.gSelectedUserID = selectedRecord.get('ObjectID');

                    console.log("this.gSelectedUser: " + this.gSelectedUser);
                    console.log("this.gSelectedUserID: " + this.gSelectedUserID);

                    var selectedUser = this.down('#selectUserTextBox');
                    selectedUser.update(this.gSelectedUser);

                    var selectedUserID = this.down('#selectUserIDTextBox');
                    selectedUserID.update(this.gSelectedUserID);

                },
                scope:this
            }
        });

        console.log("_fireSelectUser --- Exit");

    }, // end _fireSelectUser


    // ----------------------------------------------------
    // The select permission radio group was triggered.
    // ----------------------------------------------------
    _fireSelectPermissions:function (theContext, theNewValue, theOldValue) {

        console.log("_fireSelectPermissions --- Enter");




        console.log("_fireSelectPermissions --- Exit");

    }, // end _fireSelectPermissions


    // ----------------------------------------------------
    // The Grant Permissions button has been selected.
    // Generate the URL and parameters to invoke.
    // Step 1: Output the URL to the screen
    // Step 2: Let the miracle occur
    // Step 3: Invoke the script on the external server
    // ----------------------------------------------------
    _fireGrantPermissions:function () {

        console.log("_fireGrantPermissions --- Enter");

        var permissionsRadioGroup = this.down('#permissionsRadioGroup');

        console.log(permissionsRadioGroup);

        var permissionsSelected = permissionsRadioGroup.getValue();
        console.log("permissionsSelected =>");
        console.log(permissionsSelected);

        var aPermission = permissionsSelected["rbValue"];
        console.log("aPermission: " + aPermission);

        var aURL = this.gURLPrefixToCall;

        aURL += "ruid=" + this.gUserID;
        aURL += "&uuid=" + this.gSelectedUserID;
        aURL += "&poid=" + this.gSelectedProjectID;
        aURL += "&rolt=" + aPermission;
        aURL += "&rwid=" + this.gWs;

        console.log("aURL: " + aURL);

        var urlTextBox = this.down('#urlToCallValueTextBox');
        //urlTextBox.update(aURL);

        // <a href="http://www.w3schools.com/">Visit W3Schools</a>

        urlTextBox.update('<a href="' + aURL + '">Click Here</a>');


        console.log("_fireGrantPermissions --- Exit");

    } // end _fireGrantPermissions


}); // end of Ext.define

