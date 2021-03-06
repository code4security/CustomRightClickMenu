﻿/// <reference path="../../../elements.d.ts" />

import { NodeEditBehaviorDividerInstance } from '../../node-edit-behavior/node-edit-behavior';
import { Polymer } from '../../../../../tools/definitions/polymer';

namespace DividerEditElement {
	export const dividerEditProperties: {
		item: CRM.DividerNode;
	} = {
		item: {
			type: Object,
			value: {},
			notify: true
		}
	} as any;

	export class DE {
		static is: string = 'divider-edit';

		static behaviors = [window.Polymer.NodeEditBehavior];

		static properties = dividerEditProperties;

		static init(this: NodeEditBehaviorDividerInstance) {
			this._init();
		};

		static ready(this: NodeEditBehaviorDividerInstance) {
			window.dividerEdit = this;
		}

	}

	if (window.objectify) {
		window.register(DE);
	} else {
		window.addEventListener('RegisterReady', () => {
			window.register(DE);
		});
	}
}

export type DividerEdit = Polymer.El<'divider-edit', typeof DividerEditElement.DE & 
	typeof DividerEditElement.dividerEditProperties>;