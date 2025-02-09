import $ from 'jquery';
import { MaxLevel } from './Constants/ConfigVariables';
import { InitDefaultData } from './Handlers/DataInitHandler';
import { AddEventHandlers, UpdateSinnerIdentityCard } from './Handlers/UIHandler';
import { ProcessURL } from './Handlers/URLHandler';

InitDefaultData();
AddEventHandlers();
ProcessURL();

$('#equipable-level-value').text(MaxLevel);
$('#deployment-panel').hide();

globalThis.TeamData.forEach(sinner => {
    UpdateSinnerIdentityCard(sinner.SinnerEnum);
});