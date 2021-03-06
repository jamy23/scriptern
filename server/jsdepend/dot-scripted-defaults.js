/*******************************************************************************
 * @license
 * Copyright (c) 2012 VMware, Inc. All Rights Reserved.
 * THIS FILE IS PROVIDED UNDER THE TERMS OF THE ECLIPSE PUBLIC LICENSE
 * ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION OF THIS FILE
 * CONSTITUTES RECIPIENTS ACCEPTANCE OF THE AGREEMENT.
 * You can obtain a current copy of the Eclipse Public License from
 * http://www.opensource.org/licenses/eclipse-1.0.php
 *
 * Contributors:
 *     Kris De Volder - initial API and implementation
 ******************************************************************************/

// The settings defined below are automatically used as global defaults
// for settings configured via the '.scripted' or '.scripterc' file.
module.exports = {
	lint: {
		//TODO: actually should use path glob exps to configure lint exclusion to be
		// consistent with search exclusion
		exclude_dirs : [
			'node_modules',
			'components' //Bower components.
		]
	},
	search: {
		exclude: '**/require.js', //Why would you wanna search in there really?
		deemphasize: [
			//Not deemphasized: any files not mathcin
			'**/test*', //Test files in the user's own code.
			'**/.*', //. files
			[	//All at the bottom: third party library code
				'**/node_modules',
				'**/components' //bower installed components
			]
		]
	}
};