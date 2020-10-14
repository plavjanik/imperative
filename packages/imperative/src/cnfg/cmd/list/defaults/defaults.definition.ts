/*
* This program and the accompanying materials are made available under the terms of the
* Eclipse Public License v2.0 which accompanies this distribution, and is available at
* https://www.eclipse.org/legal/epl-v20.html
*
* SPDX-License-Identifier: EPL-2.0
*
* Copyright Contributors to the Zowe Project.
*
*/

import { join } from "path";
import { ICommandDefinition } from "../../../../../../cmd";
import ListBaseHandler from "../list.base.handler";

export const defaultsDefinition: ICommandDefinition = {
    name: "defaults",
    type: "command",
    handler: join(__dirname, "defaults.handler"),
    summary: "list config property 'defaults'",
    description: "List config property 'defaults'.",
    options: ListBaseHandler.OPTIONS
};
