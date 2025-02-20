import { Request, Response } from 'express';

import { manageWebhookCall } from '../forms/manage-webhook';
import { AppCallResponse } from '../types';
import { CallResponseHandler, newOKCallResponse } from '../utils/call-responses';
import { showMessageToMattermost } from '../utils/utils';

export const filterWebhookNotification: CallResponseHandler = async (req: Request, res: Response) => {
    let callResponse: AppCallResponse;

    try {
        await manageWebhookCall(req.body);
        callResponse = newOKCallResponse();
    } catch (error: any) {
        callResponse = showMessageToMattermost(error);
    }
    res.json(callResponse);
};
