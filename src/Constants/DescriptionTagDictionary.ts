import { StatusTypeEnum } from '../Enums/Index';

interface TagInfo {
    Name: string;
    Type: StatusTypeEnum;
    Description: string;
    ImageLink: string;
    HtmlString: string;
}

// return html for the formatted keyword (without the tooltip)
function CreateHtmlString(name: string, type: StatusTypeEnum, imageLink: string, dictionaryKey: string) {
    if (type != StatusTypeEnum.ActivationKeyword) {
        return '<span class="tooltip-container ' + (type == StatusTypeEnum.Buff ? 'buff' : type == StatusTypeEnum.Debuff ? 'debuff' : 'neutral') + '" data-status="' + dictionaryKey + '"><img src="' + imageLink + '" class="status-icon">' + name + '</span>';
    }
    else {
        return '<span style="color:' + imageLink + '">' + name + '</span>';
    }
}

export const DescriptionTagDictionary: Record<string, TagInfo> = {
    '[Slash DMG Up]': {
        Name: 'Slash DMG Up', Type: StatusTypeEnum.Buff, Description:
            "Deal more damage with Slash skills based on the effect's Count for one turn. (Max 10)",
        ImageLink: "./assets/Icons/Statuses/DMGUp/SlashDMGUp.png", get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Pierce DMG Up]': {
        Name: 'Pierce DMG Up', Type: StatusTypeEnum.Buff, Description:
            "Deal more damage with Pierce skills based on the effect's Count for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/DMGUp/PierceDMGUp.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Blunt DMG Up]': {
        Name: 'Blunt DMG Up', Type: StatusTypeEnum.Buff, Description:
            "Deal more damage with Blunt skills based on the effect's Count for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/DMGUp/BluntDMGUp.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Wrath DMG Up]': {
        Name: 'Wrath DMG Up', Type: StatusTypeEnum.Buff, Description:
            "Deal more damage with Wrath skills based on the effect's Count for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/DMGUp/WrathDMGUp.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Lust DMG Up]': {
        Name: 'Lust DMG Up', Type: StatusTypeEnum.Buff, Description:
            "Deal more damage with Lust skills based on the effect's Count for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/DMGUp/LustDMGUp.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Sloth DMG Up]': {
        Name: 'Sloth DMG Up', Type: StatusTypeEnum.Buff, Description:
            "Deal more damage with Sloth skills based on the effect's Count for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/DMGUp/SlothDMGUp.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Gluttony DMG Up]': {
        Name: 'Gluttony DMG Up', Type: StatusTypeEnum.Buff, Description:
            "Deal more damage with Gluttony skills based on the effect's Count for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/DMGUp/GluttonyDMGUp.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Gloom DMG Up]': {
        Name: 'Gloom DMG Up', Type: StatusTypeEnum.Buff, Description:
            "Deal more damage with Gloom skills based on the effect's Count for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/DMGUp/GloomDMGUp.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Pride DMG Up]': {
        Name: 'Pride DMG Up', Type: StatusTypeEnum.Buff, Description:
            "Deal more damage with Pride skills based on the effect's Count for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/DMGUp/PrideDMGUp.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Envy DMG Up]': {
        Name: 'Envy DMG Up', Type: StatusTypeEnum.Buff, Description:
            "Deal more damage with Envy skills based on the effect's Count for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/DMGUp/EnvyDMGUp.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },

    '[Slash Power Up]': {
        Name: 'Slash Power Up', Type: StatusTypeEnum.Buff, Description:
            "Slash skills gain final Power by the effect's Count for one turn",
        ImageLink: './assets/Icons/Statuses/PowerUp/SlashPowerUp.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Pierce Power Up]': {
        Name: 'Pierce Power Up', Type: StatusTypeEnum.Buff, Description:
            "Pierce skills gain final Power by the effect's Count for one turn",
        ImageLink: './assets/Icons/Statuses/PowerUp/PiercePowerUp.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Blunt Power Up]': {
        Name: 'Blunt Power Up', Type: StatusTypeEnum.Buff, Description:
            "Blunt skills gain final Power by the effect's Count for one turn",
        ImageLink: './assets/Icons/Statuses/PowerUp/BluntPowerUp.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Wrath Power Up]': {
        Name: 'Wrath Power Up', Type: StatusTypeEnum.Buff, Description:
            "Blunt skills gain final Power by the effect's Count for one turn",
        ImageLink: './assets/Icons/Statuses/PowerUp/WrathPowerUp.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Lust Power Up]': {
        Name: 'Lust Power Up', Type: StatusTypeEnum.Buff, Description:
            "Blunt skills gain final Power by the effect's Count for one turn",
        ImageLink: './assets/Icons/Statuses/PowerUp/LustPowerUp.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Sloth Power Up]': {
        Name: 'Sloth Power Up', Type: StatusTypeEnum.Buff, Description:
            "Blunt skills gain final Power by the effect's Count for one turn",
        ImageLink: './assets/Icons/Statuses/PowerUp/SlothPowerUp.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Gluttony Power Up]': {
        Name: 'Gluttony Power Up', Type: StatusTypeEnum.Buff, Description:
            "Blunt skills gain final Power by the effect's Count for one turn",
        ImageLink: './assets/Icons/Statuses/PowerUp/GluttonyPowerUp.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Gloom Power Up]': {
        Name: 'Gloom Power Up', Type: StatusTypeEnum.Buff, Description:
            "Blunt skills gain final Power by the effect's Count for one turn",
        ImageLink: './assets/Icons/Statuses/PowerUp/GloomPowerUp.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Pride Power Up]': {
        Name: 'Pride Power Up', Type: StatusTypeEnum.Buff, Description:
            "Blunt skills gain final Power by the effect's Count for one turn",
        ImageLink: './assets/Icons/Statuses/PowerUp/PridePowerUp.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Envy Power Up]': {
        Name: 'Envy Power Up', Type: StatusTypeEnum.Buff, Description:
            "Blunt skills gain final Power by the effect's Count for one turn",
        ImageLink: './assets/Icons/Statuses/PowerUp/EnvyPowerUp.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },

    '[Slash Protection]': {
        Name: 'Slash Protection', Type: StatusTypeEnum.Buff, Description:
            "Take less damage from Slash skills based on the effect's Count for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/Protection/SlashProtection.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Pierce Protection]': {
        Name: 'Pierce Protection', Type: StatusTypeEnum.Buff, Description:
            "Take less damage from Pierce skills based on the effect's Count for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/Protection/PierceProtection.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Blunt Protection]': {
        Name: 'Blunt Protection', Type: StatusTypeEnum.Buff, Description:
            "Take less damage from Blunt skills based on the effect's Count for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/Protection/BluntProtection.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Wrath Protection]': {
        Name: 'Wrath Protection', Type: StatusTypeEnum.Buff, Description:
            "Take less damage from Wrath skills based on the effect's Count for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/Protection/WrathProtection.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Lust Protection]': {
        Name: 'Lust Protection', Type: StatusTypeEnum.Buff, Description:
            "Take less damage from Lust skills based on the effect's Count for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/Protection/LustProtection.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Sloth Protection]': {
        Name: 'Sloth Protection', Type: StatusTypeEnum.Buff, Description:
            "Take less damage from Sloth skills based on the effect's Count for one turn. (Max 10)",
        ImageLink: "./assets/Icons/Statuses/Protection/SlothProtection.png", get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    "[Gluttony Protection]": {
        Name: "Gluttony Protection", Type: StatusTypeEnum.Buff, Description:
            "Take less damage from Gluttony skills based on the effect's Count for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/Protection/GluttonyProtection.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Gloom Protection]': {
        Name: 'Gloom Protection', Type: StatusTypeEnum.Buff, Description:
            "Take less damage from Gloom skills based on the effect's Count for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/Protection/GloomProtection.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Pride Protection]': {
        Name: 'Pride Protection', Type: StatusTypeEnum.Buff, Description:
            "Take less damage from Pride skills based on the effect's Count for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/Protection/PrideProtection.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Envy Protection]': {
        Name: 'Envy Protection', Type: StatusTypeEnum.Buff, Description:
            "Take less damage from Envy skills based on the effect's Count for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/Protection/EnvyProtection.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },

    '[Power Up]': {
        Name: 'Power Up', Type: StatusTypeEnum.Buff, Description:
            "All skills gain Final Power by the effect's Count for one turn.",
        ImageLink: './assets/Icons/Statuses/PowerUp/PowerUp.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Attack Power Up]': {
        Name: 'Attack Power Up', Type: StatusTypeEnum.Buff, Description:
            "Attack skills gain Final Power by the effect's Count for one turn.",
        ImageLink: './assets/Icons/Statuses/PowerUp/AttackPowerUp.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Defense Power Up]': {
        Name: 'Defense Power Up', Type: StatusTypeEnum.Buff, Description:
            "Defense skills gain Final Power by the effect's Count for one turn.",
        ImageLink: './assets/Icons/Statuses/PowerUp/DefensePowerUp.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Clash Power Up]': {
        Name: 'Clash Power Up', Type: StatusTypeEnum.Buff, Description:
            "Gain Clash Power by the effect's Count for one turn.",
        ImageLink: './assets/Icons/Statuses/ClashPowerUp.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Offense Level Up]': {
        Name: 'Offense Level Up', Type: StatusTypeEnum.Buff, Description:
            "Offense level increases based on the effect's Potency for one turn.",
        ImageLink: './assets/Icons/Statuses/OffenseLevelUp.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Defense Level Up]': {
        Name: 'Defense Level Up', Type: StatusTypeEnum.Buff, Description:
            "Defense level increases based on the effect's Potency for one turn.",
        ImageLink: './assets/Icons/Statuses/DefenseUp.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Damage Up]': {
        Name: 'Damage Up', Type: StatusTypeEnum.Buff, Description:
            "Deal 10% more damage with skills based on the effect's Potency for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/DamageUp.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Weak-resist DMG Boost]': {
        Name: 'Weak-resist DMG Boost', Type: StatusTypeEnum.Buff, Description:
            "Boost the damage of attacks against Weak resistances by 10% per count for one turn.",
        ImageLink: './assets/Icons/Statuses/WeakResistDMGBoost.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Plus Coin Boost]': {
        Name: 'Plus Coin Boost', Type: StatusTypeEnum.Buff, Description:
            "Raise the Power of Plus Coins by the effect's Count for one turn.",
        ImageLink: './assets/Icons/Statuses/Coin/PlusCoinBoost.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Minus Coin Drop]': {
        Name: 'Minus Coin Drop', Type: StatusTypeEnum.Buff, Description:
            "Reduce the Power of Minus Coins by the effect's Count for one turn.",
        ImageLink: './assets/Icons/Statuses/Coin/MinusCoinDrop.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Haste]': {
        Name: 'Haste', Type: StatusTypeEnum.Buff, Description:
            "Speed increases by the effect's Count for one turn.",
        ImageLink: './assets/Icons/Statuses/Haste.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Protection]': {
        Name: 'Protection', Type: StatusTypeEnum.Buff, Description:
            "Take 10% less damage per count from attacks for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/Protection/Protection.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Rupture Protection]': {
        Name: 'Rupture Protection', Type: StatusTypeEnum.Buff, Description:
            "Take -1 damage per Count from Rupture effects for one turn.",
        ImageLink: './assets/Icons/Statuses/Protection/RuptureProtection.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Bleed Resistance]': {
        Name: 'Bleed Resistance', Type: StatusTypeEnum.Buff, Description:
            "When taking damage from Bleed, reduce the damage by 10% per count (Max 10).",
        ImageLink: './assets/Icons/Statuses/BleedResistance.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[HP Healing Boost]': {
        Name: 'HP Healing Boost', Type: StatusTypeEnum.Buff, Description:
            "Increases HP healing provided by Passive abilities, Skills, and Coin effects by 10% per count.",
        ImageLink: './assets/Icons/Statuses/HPHealingBoost.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[E.G.O Resource Amp]': {
        Name: 'E.G.O Resource Amp', Type: StatusTypeEnum.Buff, Description:
            "Increases the amount of E.G.O resources earned from skills by the effect's Count for one turn.",
        ImageLink: './assets/Icons/Statuses/EGOResourceAmp.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Poise]': {
        Name: 'Poise', Type: StatusTypeEnum.Buff, Description:
            "On hit, gain a Potency-based chance to deal critical damage, reducing the Count by 1 if successful. At the end of the turn, reduce the Count by 1. Critical hits deal 1.2x damage.",
        ImageLink: './assets/Icons/Statuses/Poise.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },   
    '[Deep Breath]': {
        Name: 'Deep Breath', Type: StatusTypeEnum.Buff, Description:
            "- Max Stack: 20<br>" +
            "- On Crit: at 15+ Poise Potency and 5+ Poise Count, consume (Poise Potency on self / 5) Poise Potency to deal +(Poise Potency consumed x 4)% more Damage on Critical Hit and lose 1 Stack",
        ImageLink: './assets/Icons/Statuses/DeepBreath.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Nebulizer Beta]': {
        Name: 'Nebulizer β', Type: StatusTypeEnum.Buff, Description:
            "- Max Stack: 5<br>" +
            "- This effect persists throughout the Encounter<br>" +
            "- When activating Pride A-Reson.: on Combat Start, apply 3 Poise and +3 Poise Count on self and (Stack) allies (prioritizes allies that gain or use Poise or Poise Count; among them, prioritize allies with the least Poise Potency)",
        ImageLink: './assets/Icons/Statuses/NebulizerBeta.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, 'Nebulizer Beta'); }
    },
    '[Charge]': {
        Name: 'Charge', Type: StatusTypeEnum.Buff, Description:
            "Resource used by certain skills for additional effects. Its Count can go up to 20. Count lowers by 1 at the end of each turn.",
        ImageLink: './assets/Icons/Statuses/Charge.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Charge Barrier]': {
        Name: 'Charge Barrier', Type: StatusTypeEnum.Buff, Description:
            "- Gain (Charge Barrier # x 3) Shield.<br>" +
            "- Lose 1 Charge Barrier after losing (Charge Barrier # x 3) Shield.<br>" +
            "- (If the unit is a W Corp. employee, ALL Charge Barrier effects activate at (Charge Barrier # x 5) instead of at (Charge Barrier # x 3))<br>" +
            "- Turn end: Gain a Charge Count for each Charge Barrier #, and Charge Barrier and Shield gained from Charge Barrier expire completely next turn",
        ImageLink: './assets/Icons/Statuses/ChargeBarrier.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Load]': {
        Name: 'Load', Type: StatusTypeEnum.Buff, Description:
            "- Max Value: 6<br>" +
            "- Attack Skills that consumed Charge Count deal +2.5% more damage for every value on self (max 15%)<br>" +
            "- If the affected unit is a W Corp. employee, deal +5% more damage for every value instead (max 30%)<br>" +
            "- Turn End: this effect expires",
        ImageLink: './assets/Icons/Statuses/Load.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Photoelectricity]': {
        Name: 'Photoelectricity', Type: StatusTypeEnum.Debuff, Description:
            "Max Value: 3<br>" +
            "When this unit is hit, the Attacker gains Charge Count equal to the value (once per Skill)<br>" +
            "- If the Attacker has 5- Charge Count, they gain +3 additional Charge Count<br>" +
            "Turn End: this effect expires",
        ImageLink: './assets/Icons/Statuses/Photoelectricity.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Red Eyes]': {
        Name: 'Red Eyes', Type: StatusTypeEnum.Buff, Description:
            "- Base Skill Coin effects inflict +1 more Bleed<br>" +
            "- Max Value: 20<br>" +
            "- Unique Charge (fixed Potency)<br>" +
            "- Resource used by certain Skills for additional effects<br>" +
            "- Enhances the buff based on Value<br>" +
            "· Stage 1 (1~7): Red Eyes<br>" +
            "· Stage 2 (8~15): Red Eyes - Alert<br>" +
            "· Stage 3 (16~20): Red Eyes - Devouring<br>" +
            "- The amount of additional Bleed inflicted by the first line of this buff is equal to the buff enhancement Stage (max 3)",
        ImageLink: './assets/Icons/Statuses/RedEyes.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Penitence]': {
        Name: 'Penitence', Type: StatusTypeEnum.Buff, Description:
            "- Heal 2 SP On Hit with Base Skill Coins that gain Penitence<br>" +
            "- Max Value: 20<br>" +
            "- Unique Charge (fixed Potency)<br>" +
            "- Turn Start: gain (Penitence)% of max HP as Shield<br>" +
            "- Resource used by certain Skills for additional effects<br>" +
            "- Enhances the buff based on Value<br>" +
            "· Stage 1 (1~7): Penitence<br>" +
            "· Stage 2 (8~15): Penitence - Periphery<br>" +
            "· Stage 3 (16~20): Penitence - Confession<br>" +
            "- The amount of SP healed by the first line of this buff is based on the enhancement Stage (enhancement Stage x 2)",
        ImageLink: './assets/Icons/Statuses/Penitence.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Defensive Stance]': {
        Name: 'Defensive Stance', Type: StatusTypeEnum.Buff, Description:
            "- Max Value: 2<br>" +
            "- This effect does not compound in Potency; stacking it only extends its duration.<br>" +
            "- Reduced by 1 at Turn End<br>" +
            "- When a unit gains this effect, gain the following effects next turn:<br>" +
            " · Fix this unit's Speed to its minimum value<br>" +
            " · Gain 5 Defense Level Up<br>" +
            " · Each of this unit's Slots gain +(10 / this unit's # of Slots) Aggro<br>" +
            " · When chaining Skills, this unit can draw enemies' attack toward this unit regardless of Speed (Focused Encounters only)<br>" +
            " · Upon Clash Win, trigger Tremor Burst<br>" +
            " · Cannot be Staggered by damage",
        ImageLink: './assets/Icons/Statuses/DefensiveStance.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Fanatic]': {
        Name: 'Fanatic', Type: StatusTypeEnum.Buff, Description:
            "Skill Power +1 against units with Nails.",
        ImageLink: './assets/Icons/Statuses/Fanatic.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Blood-tinged Scissorblades]': {
        Name: 'Blood-tinged Scissorblades', Type: StatusTypeEnum.Buff, Description:
            "- Max Value: 10<br>" +
            "- Stage 1 Blood-tinged Scissorblades<br>" +
            "- At 10+ Blood-tinged Scissorblades, converts to Blood-tinged Scissorblades II.<br>" +
            "- At 20+ Blood-tinged Scissorblades, converts to Blood-tinged Scissorblades III.<br>" +
            "- Reverts to previous Stage when the Stack drops below the requirements.<br>" +
            "- Blood-tinged Scissorblades does not drop below 1.<br>" +
            "- At Blood-tinged Scissorblades II, gain 1 Offense Level Up and 1 Defense Level Down based on the Stack<br>" +
            "- At Blood-tinged Scissorblades III, gain 1 Offense Level Up based on the Stack",
        ImageLink: './assets/Icons/Statuses/BloodTingedScissorblades.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Festive Fever]': {
        Name: 'Festive Fever', Type: StatusTypeEnum.Buff, Description:
            "- Max Value: 10<br>" +
            "- Expires at Turn End<br>" +
            "- Againts targets with Bleed: deal +1.5% more damage for every Stack<br>" +
            "- Skills that consume or gain Bloodfeast deal +3% more damage for every Stack instead",
        ImageLink: './assets/Icons/Statuses/FestiveFever.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Hardblood]': {
        Name: 'Hardblood', Type: StatusTypeEnum.Buff, Description:
            "- Max Stack: 10<br>" +
            "- Stage 1 Hardblood<br>" +
            "- At 10+ Hardblood, converts to Hardblood II.<br>" +
            "- At 20+ Hardblood, converts to Hardblood III.<br>" +
            "- Reverts to the previous Stage when the Stack drops below the requirements.<br>" +
            "- Hardblood does not drop below 1.<br>" +
            "- Raise Min & Max Speed values by 1 for every 10 Hardblood<br>" +
            "- At Hardblood II, gain 1 Offense Level Up based on the Stack (1 / 5 Stack)<br>" +
            "- At Hardblood III, gain 1 Offense Level Up and 1 Defense Level Up based on the Stack (1 / 5 Stack)",
        ImageLink: './assets/Icons/Statuses/Hardblood.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Shimmering (Bloodfiend)]': {
        Name: 'Shimmering [Bloodfiend]', Type: StatusTypeEnum.Buff, Description:
            "- Max Stack: 50<br>" +
            "- As long as this effect exists, all Bleed damage taken by the Shield HP is converted to Bloodfeast.<br>" +
            "- Gain Shield HP equal to the Stack at the moment of its application<br>" +
            "- Expires at Turn End",
        ImageLink: './assets/Icons/Statuses/Shimmering.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, 'Shimmering (Bloodfiend)'); }
    },
    '[Blooming Thorn]': {
        Name: 'Blooming Thorn', Type: StatusTypeEnum.Buff, Description:
            "- Max Value: 10<br>" +
            "- Stage 1 Blooming Thorn<br>" +
            "- Gain 1 Defense Level for every 2 Stack (max 5)<br>" +
            "- When hit, inflict 1 Bleed againts the attacker and lose 1 Stack<br>" +
            "- [The Princess of La Manchaland Rodion Only]<br>" +
            " · At max Stack, convert to the next Stage of this effect.<br>" +
            " · Inflict +(Stage - 1) more Bleed and Rupture with this unit's Base Attack Skill Coin effects.<br>" +
            " · Reverts to previous Stage when the Stack drops below the requirements.",
        ImageLink: './assets/Icons/Statuses/BloomingThorns.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Appetite]': {
        Name: 'Appetite', Type: StatusTypeEnum.Buff, Description:
            "Increases the healing provided by the Passive [Rustle Up]. Spent when the Passive activates.",
        ImageLink: './assets/Icons/Statuses/Appetite.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Unjust Enrichment]': {
        Name: 'Unjust Enrichment', Type: StatusTypeEnum.Buff, Description:
            "- Gained on Heads Hit against target with Bleed (Max 4)<br>" +
            "- When 'Bullets are Pricey' Passive activates, consume all Unjust Enrichment stack to deal bonus damage",
        ImageLink: './assets/Icons/Statuses/UnjustEnrichment.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Assist Attack]': {
        Name: 'Assist Attack', Type: StatusTypeEnum.Buff, Description:
            "- If unit A applies this effect to unit B: Unit B follows up with an Unopposed Attack with its Skill 1 against the same enemy unit A attacked with its Skill. Activates at unit A's Attack End.<br>" +
            "- The Skill used as an Assist Attack does not affect Unit B's upcoming Skills list.",
        ImageLink: './assets/Icons/Statuses/AssistAttack.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Heated Gas Harpoon]': {
        Name: 'Heated Gas Harpoon', Type: StatusTypeEnum.Buff, Description:
            "For 1 turn, inflict 1 Burn with Heads Hit",
        ImageLink: './assets/Icons/Statuses/HeatedGasHarpoon.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Overheated Gas Harpoon]': {
        Name: 'Overheated Gas Harpoon', Type: StatusTypeEnum.Buff, Description:
            "For 1 turn, inflict 1 Burn On Hit",
        ImageLink: './assets/Icons/Statuses/OverheatedGasHarpoon.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Swordplay of the Homeland - Rending]': {
        Name: "Swordplay of the Homeland - Rending", Type: StatusTypeEnum.Buff, Description:
            "Skill 1 gains Final Power by the effect's Count for this turn",
        ImageLink: './assets/Icons/Statuses/SwordOfTheHomelandRending.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Swordplay of the Homeland - Penetrating]': {
        Name: "Swordplay of the Homeland - Penetrating", Type: StatusTypeEnum.Buff, Description:
            "Skill 2 gains Final Power by the effect's Count for this turn",
        ImageLink: './assets/Icons/Statuses/SwordOfTheHomelandPenetrating.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Swordplay of the Homeland]': {
        Name: "Swordplay of the Homeland", Type: StatusTypeEnum.Buff, Description:
            "- When at 5+ Poise, upon Skill use, Skill 1 and Skill 2 gain Coin Power +(3/# of Coins, minimum 1) and deal +(30/# of Coins)% damage on Critical Hit<br>" +
            "- When at 7+ Poise, upon Skill use, Skill 3 deals +(30/# of Coins)% more damage and deals +(50/# of Coins)% damage on Critical Hit",
        ImageLink: './assets/Icons/Statuses/SwordOfTheHomelandPenetrating.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Remembrance]': {
        Name: 'Remembrance', Type: StatusTypeEnum.Buff, Description:
            "- When at 5+ Poise, upon Skill use, Skill 1 and Skill 2 gain Coin Power +(3/# of Coins, minimum 1) and deal +(30/# of Coins)% damage on Critical Hit<br>" +
            "- When at 7+ Poise, upon Skill use, Skill 3 deals +(30/# of Coins)% more damage and deals +(50/# of Coins)% damage on Critical Hit",
        ImageLink: './assets/Icons/Statuses/Remembrance.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Borrowed Time]': {
        Name: 'Borrowed Time', Type: StatusTypeEnum.Buff, Description:
            "Turn End at 2+ Count:<br>" +
            "- Gain (Borrowed Time Count - 1) Haste, Clash Power Up, and Fragile next turn<br>" +
            "- If this unit is set to gain more Bind than Haste next turn, the Borrowed Time effect expires at the next Turn Start, and this unit gets Staggered<br>" +
            "<br>" +
            "Turn End: At 1 Count, gain 2(Borrowed Time Stack - 1) Bind next turn<br>" +
            "Turn End: Gain 1 Stack, lose 1 Count",
        ImageLink: './assets/Icons/Statuses/BorrowedTime.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Dullahan]': {
        Name: 'Dullahan', Type: StatusTypeEnum.Buff, Description:
            "- Max Value: 3<br>" +
            "- Gain 3 Offense Level<br>" +
            "- Gain 3 Defense Level<br>" +
            "- Raises Min & Max Speed values by 1<br>" +
            "- Turn End: Gain 1 Dullahan next turn (At -25 SP or less, however, completely lose Dullahan)<br>" +
            "- Turn End: If this unit has Dullahan, lose (15 - (Coffin/2)) SP. (min 10)",
        ImageLink: './assets/Icons/Statuses/Dullahan.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Coffin]': {
        Name: 'Coffin', Type: StatusTypeEnum.Buff, Description:
            "- Max Value: 10<br>" +
            "- At Turn End:<br>" +
            " - Gain 2 Damage Up next turn for every 3 Value (max 6)<br>" +
            " - Raise minimum Speed by 1 next turn for every 4 Value (max 2)<br>" +
            " - Gain 1 Clash Power Up next turn for every 5 Value (max 2)",
        ImageLink: './assets/Icons/Statuses/Coffin.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Wild Hunt]': {
        Name: 'Wild Hunt', Type: StatusTypeEnum.Buff, Description:
            '- In the same turn this unit gained Wild Hunt for the first time, always have 1 remaining HP; "revive" (heal 50% HP and reset SP to 0) this unit at Turn End.<br>' +
            "- If this unit is killed by an attack, gain E.G.O resource for the least-owned E.G.O resource<br>" +
            "- If this unit is killed by an attack, inflict 3 Sinking against the last attacker<br>" +
            "- Dies at the end of the same turn this unit was revived in",
        ImageLink: './assets/Icons/Statuses/WildHunt.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Before the King]': {
        Name: 'Before the King', Type: StatusTypeEnum.Buff, Description:
            "When this unit's attack with 1 Atk Weight hits, inflict 50% of the resulting Coin value on hit as (Affinity/Attack type of the Attack Skill used to hit) damage against 2 other attackable enemies with the least HP.",
        ImageLink: './assets/Icons/Statuses/BeforeTheKing.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Before the King in Binds]': {
        Name: 'Before the King in Binds', Type: StatusTypeEnum.Buff, Description:
            "When this unit's attack with 1 Atk Weight hits, inflict 100% of the resulting Coin value on hit as (Affinity/Attack type of the Attack Skill used to hit) damage against 2 other attackable enemies with the least HP.",
        ImageLink: './assets/Icons/Statuses/BeforeTheKingInBinds.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Gaze of Contempt]': {
        Name: 'Gaze of Contempt', Type: StatusTypeEnum.Buff, Description:
            "- Max Value: 7<br>" +
            "- Deal +7% more damage for every Gaze of Contempt<br>" +
            "- Turn End: this effect expires<br>" +
            "- Turn End: At 7 Gaze of Contempt value, convert it to Contempt of the Gaze next turn instead of expiring",
        ImageLink: './assets/Icons/Statuses/GazeOfContempt.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Contempt of the Gaze]': {
        Name: 'Contempt of the Gaze', Type: StatusTypeEnum.Buff, Description:
            "- Gain 7 Protection<br>" +
            "- Gain 7 Damage Down<br>" +
            "- One of this unit's Slots gains +20 Aggro<br>" +
            "- Cannot gain Gaze of Contempt as long as Contempt of the Gaze is active<br>" +
            "- Turn End: this effect expires",
        ImageLink: './assets/Icons/Statuses/ContemptOfTheGaze.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Concentration(Sniper)]': {
        Name: 'Concentration[Sniper]', Type: StatusTypeEnum.Buff, Description:
            "- Max Stack:4<br>" +
            "- Turn End: gain 1 Stack",
        ImageLink: './assets/Icons/Statuses/ConcentrationSniper.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, 'Concentration(Sniper)'); }
    },
    '[Dark Cloud Blade]': {
        Name: 'Dark Cloud Blade', Type: StatusTypeEnum.Buff, Description:
            "Max Stack: 1<br>" +
            "Gain 1 Slash Power<br>" +
            "Inflict 1 Bleed On Hit with Slash Skills",
        ImageLink: './assets/Icons/Statuses/DarkCloudBlade.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Battle Ready]': {
        Name: 'Battle Ready', Type: StatusTypeEnum.Buff, Description:
            "Max Value: 1<br>" +
            "Bleed Potency and Count inflicted with this unit's Skill or Coin effects: +1<br>" +
            "Gain 1 Slash Power Up and 3 Slash DMG Up for the duration of this Encounter",
        ImageLink: './assets/Icons/Statuses/BattleReady.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Cumulus Wall]': {
        Name: 'Cumulus Wall', Type: StatusTypeEnum.Buff, Description:
            "Max Stack: 1<br>" +
            "Defense Skill Final Power +1<br>" +
            "This effect expires at Turn End or after attack of the following: 'Rules of the Backstreets'",
        ImageLink: './assets/Icons/Statuses/CumulusWall.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[The First Magic Bullet]': {
        Name: 'The First Magic Bullet', Type: StatusTypeEnum.Buff, Description:
            "- Deal +20% more damage <br>" +
            "- Raise the target's Stagger Threshold by damage dealt (max 30)",
        ImageLink: './assets/Icons/Statuses/TheFirstMagicBullet.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[The Second Magic Bullet]': {
        Name: 'The Second Magic Bullet', Type: StatusTypeEnum.Buff, Description:
            "- Deal +10% more damage <br>" +
            "- Deal damage to target's other than the main target (max targets: 4); the main target takes 0 damage <br>" +
            "- On Hit, inflict 3 Paralyze",
        ImageLink: './assets/Icons/Statuses/TheSecondMagicBullet.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[The Third Magic Bullet]': {
        Name: 'The Third Magic Bullet', Type: StatusTypeEnum.Buff, Description:
            "- Deal +20% more damage <br>" +
            "- Before Attack: gain +3 Atk Weight <br>" +
            "- On Hit, inflict 2 Attack Power Down and 10 Burn",
        ImageLink: './assets/Icons/Statuses/TheThirdMagicBullet.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[The Fourth Magic Bullet]': {
        Name: 'The Fourth Magic Bullet', Type: StatusTypeEnum.Buff, Description:
            "- Deal +30% more damage <br>" +
            "- Before Attack: gain +3 Atk Weight <br>" +
            "- On Hit, raise the target's Stagger Threshold by damage dealt (max 20); then, inflict 3 Fragility next turn",
        ImageLink: './assets/Icons/Statuses/TheFourthMagicBullet.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[The Fifth Magic Bullet]': {
        Name: 'The Fifth Magic Bullet', Type: StatusTypeEnum.Buff, Description:
            "- Deal +30% more damage <br>" +
            "- Before Attack: gain +4 Atk Weight <br>" +
            "- On Hit, inflict 10 Burn; then, inflict 4 Offense Level Down and 4 Defense Level Down next turn",
        ImageLink: './assets/Icons/Statuses/TheFifthMagicBullet.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[The Sixth Magic Bullet]': {
        Name: 'The Sixth Magic Bullet', Type: StatusTypeEnum.Buff, Description:
            "- Before Attack: gain +6 Atk Weight <br>" +
            "- On Hit, raise the target's Stagger Threshold by damage dealt (max 30) <br>" +
            "- Reuse the Coin for every 7 Burn on the main target (2 times max) <br>" +
            "- Plus Coin Skill Base Power -16 <br>" +
            "- Minus Coin Skill Base Power -22 <br>" +
            "- Plus Coin Power -8 <br>" +
            "- Minus Coin Power -12",
        ImageLink: './assets/Icons/Statuses/TheSixthMagicBullet.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[The Seventh Magic Bullet]': {
        Name: 'The Seventh Magic Bullet', Type: StatusTypeEnum.Buff, Description:
            "- Deal +200% more damage <br>" +
            "- Deal +2.5% more damage for every 1% missing HP on the target (max 200%) <br>" +
            "- Before Attack: for this attack, if the Pierce Damage Res. on the target or on self are less than 2.0, change them to Fatal(x2.0) <br>" +
            "- After Attack: kills this unit",
        ImageLink: './assets/Icons/Statuses/TheSeventhMagicBullet.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },

    '[Slash DMG Down]': {
        Name: 'Slash DMG Down', Type: StatusTypeEnum.Debuff, Description:
            "Deal less damage with Slash skills based on the effect's Potency for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/DMGDown/SlashDMGDown.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Pierce DMG Down]': {
        Name: 'Pierce DMG Down', Type: StatusTypeEnum.Debuff, Description:
            "Deal less damage with Pierce skills based on the effect's Potency for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/DMGDown/PierceDMGDown.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Blunt DMG Down]': {
        Name: 'Blunt DMG Down', Type: StatusTypeEnum.Debuff, Description:
            "Deal less damage with Blunt skills based on the effect's Potency for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/DMGDown/BluntDMGDown.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Wrath DMG Down]': {
        Name: 'Wrath DMG Down', Type: StatusTypeEnum.Debuff, Description:
            "Deal less damage with Wrath skills based on the effect's Potency for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/DMGDown/WrathDMGDown.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Lust DMG Down]': {
        Name: 'Lust DMG Down', Type: StatusTypeEnum.Debuff, Description:
            "Deal less damage with Lust skills based on the effect's Potency for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/DMGDown/LustDMGDown.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Sloth DMG Down]': {
        Name: 'Sloth DMG Down', Type: StatusTypeEnum.Debuff, Description:
            "Deal less damage with Sloth skills based on the effect's Potency for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/DMGDown/SlothDMGDown.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Gluttony DMG Down]': {
        Name: 'Gluttony DMG Down', Type: StatusTypeEnum.Debuff, Description:
            "Deal less damage with Gluttony skills based on the effect's Potency for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/DMGDown/GluttonyDMGDown.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Gloom DMG Down]': {
        Name: 'Gloom DMG Down', Type: StatusTypeEnum.Debuff, Description:
            "Deal less damage with Gloom skills based on the effect's Potency for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/DMGDown/GloomDMGDown.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Pride DMG Down]': {
        Name: 'Pride DMG Down', Type: StatusTypeEnum.Debuff, Description:
            "Deal less damage with Pride skills based on the effect's Potency for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/DMGDown/PrideDMGDown.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Envy DMG Down]': {
        Name: 'Envy DMG Down', Type: StatusTypeEnum.Debuff, Description:
            "Deal less damage with Envy skills based on the effect's Potency for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/DMGDown/EnvyDMGDown.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },

    '[Slash Power Down]': {
        Name: 'Slash Power Down', Type: StatusTypeEnum.Debuff, Description:
            "Slash skills lose final Power by the effect's Count for one turn",
        ImageLink: './assets/Icons/Statuses/PowerDown/SlashPowerDown.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Pierce Power Down]': {
        Name: 'Pierce Power Down', Type: StatusTypeEnum.Debuff, Description:
            "Pierce skills lose final Power by the effect's Count for one turn",
        ImageLink: './assets/Icons/Statuses/PowerDown/PiercePowerDown.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Blunt Power Down]': {
        Name: 'Blunt Power Down', Type: StatusTypeEnum.Debuff, Description:
            "Blunt skills lose final Power by the effect's Count for one turn",
        ImageLink: './assets/Icons/Statuses/PowerDown/BluntPowerDown.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Wrath Power Down]': {
        Name: 'Wrath Power Down', Type: StatusTypeEnum.Debuff, Description:
            "Wrath skills lose final Power by the effect's Count for one turn",
        ImageLink: './assets/Icons/Statuses/PowerDown/WrathPowerDown.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Lust Power Down]': {
        Name: 'Lust Power Down', Type: StatusTypeEnum.Debuff, Description:
            "Lust skills lose final Power by the effect's Count for one turn",
        ImageLink: './assets/Icons/Statuses/PowerDown/LustPowerDown.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Sloth Power Down]': {
        Name: 'Sloth Power Down', Type: StatusTypeEnum.Debuff, Description:
            "Sloth skills lose final Power by the effect's Count for one turn",
        ImageLink: './assets/Icons/Statuses/PowerDown/SlothPowerDown.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Gluttony Power Down]': {
        Name: 'Gluttony Power Down', Type: StatusTypeEnum.Debuff, Description:
            "Gluttony skills lose final Power by the effect's Count for one turn",
        ImageLink: './assets/Icons/Statuses/PowerDown/GluttonyPowerDown.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Gloom Power Down]': {
        Name: 'Gloom Power Down', Type: StatusTypeEnum.Debuff, Description:
            "Gloom skills lose final Power by the effect's Count for one turn",
        ImageLink: './assets/Icons/Statuses/PowerDown/GloomPowerDown.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Pride Power Down]': {
        Name: 'Pride Power Down', Type: StatusTypeEnum.Debuff, Description:
            "Pride skills lose final Power by the effect's Count for one turn",
        ImageLink: './assets/Icons/Statuses/PowerDown/PridePowerDown.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Envy Power Down]': {
        Name: 'Envy Power Down', Type: StatusTypeEnum.Debuff, Description:
            "Envy skills lose final Power by the effect's Count for one turn",
        ImageLink: './assets/Icons/Statuses/PowerDown/EnvyPowerDown.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },

    '[Slash Fragility]': {
        Name: 'Slash Fragility', Type: StatusTypeEnum.Debuff, Description:
            "Take more damage from Slash skills based on the effect's Count for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/Fragility/SlashFragility.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Pierce Fragility]': {
        Name: 'Pierce Fragility', Type: StatusTypeEnum.Debuff, Description:
            "Take more damage from Pierce skills based on the effect's Count for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/Fragility/PierceFragility.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Blunt Fragility]': {
        Name: 'Blunt Fragility', Type: StatusTypeEnum.Debuff, Description:
            "Take more damage from Blunt skills based on the effect's Count for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/Fragility/BluntFragility.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Wrath Fragility]': {
        Name: 'Wrath Fragility', Type: StatusTypeEnum.Debuff, Description:
            "Take more damage from Wrath skills based on the effect's Count for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/Fragility/WrathFragility.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Lust Fragility]': {
        Name: 'Lust Fragility', Type: StatusTypeEnum.Debuff, Description:
            "Take more damage from Lust skills based on the effect's Count for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/Fragility/LustFragility.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Sloth Fragility]': {
        Name: 'Sloth Fragility', Type: StatusTypeEnum.Debuff, Description:
            "Take more damage from Sloth skills based on the effect's Count for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/Fragility/SlothFragility.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Gluttony Fragility]': {
        Name: 'Gluttony Fragility', Type: StatusTypeEnum.Debuff, Description:
            "Take more damage from Gluttony skills based on the effect's Count for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/Fragility/GluttonyFragility.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Gloom Fragility]': {
        Name: 'Gloom Fragility', Type: StatusTypeEnum.Debuff, Description:
            "Take more damage from Gloom skills based on the effect's Count for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/Fragility/GloomFragility.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Pride Fragility]': {
        Name: 'Pride Fragility', Type: StatusTypeEnum.Debuff, Description:
            "Take more damage from Pride skills based on the effect's Count for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/Fragility/PrideFragility.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Envy Fragility]': {
        Name: 'Envy Fragility', Type: StatusTypeEnum.Debuff, Description:
            "Take more damage from Envy skills based on the effect's Count for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/Fragility/EnvyFragility.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },

    '[Slash Resist Down]': {
        Name: 'Slash Resist Down', Type: StatusTypeEnum.Debuff, Description:
            "Decrease Slash Resistance based on Count",
        ImageLink: './assets/Icons/Statuses/ResistDown/SlashResistDown.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Pierce Resist Down]': {
        Name: 'Pierce Resist Down', Type: StatusTypeEnum.Debuff, Description:
            "Decrease Pierce Resistance based on Count",
        ImageLink: './assets/Icons/Statuses/ResistDown/PierceResistDown.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Wrath Resist Down]': {
        Name: 'Wrath Resist Down', Type: StatusTypeEnum.Debuff, Description:
            "Decrease Wrath Resistance based on Count",
        ImageLink: './assets/Icons/Statuses/ResistDown/WrathResistDown.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },

    '[Power Down]': {
        Name: 'Power Down', Type: StatusTypeEnum.Debuff, Description:
            "All skills lose Final Power by the effect's value for one turn.",
        ImageLink: './assets/Icons/Statuses/PowerDown/PowerDown.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Attack Power Down]': {
        Name: 'Attack Power Down', Type: StatusTypeEnum.Debuff, Description:
            "Attack skills lose Final Power by the effect's value for one turn.",
        ImageLink: './assets/Icons/Statuses/PowerDown/AttackPowerDown.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Defense Power Down]': {
        Name: 'Defense Power Down', Type: StatusTypeEnum.Debuff, Description:
            "Defense skills lose Final Power by the effect's value for one turn.",
        ImageLink: './assets/Icons/Statuses/PowerDown/DefensePowerDown.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Clash Power Down]': {
        Name: 'Clash Power Down', Type: StatusTypeEnum.Debuff, Description:
            "In a Clash, attack skills lose Clash Power by the effect's value for one turn.",
        ImageLink: './assets/Icons/Statuses/ClashPowerDown.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Offense Level Down]': {
        Name: 'Offense Level Down', Type: StatusTypeEnum.Debuff, Description:
            "Offense level decreases based on the effect's value for one turn.",
        ImageLink: './assets/Icons/Statuses/OffenseLevelDown.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Defense Level Down]': {
        Name: 'Defense Level Down', Type: StatusTypeEnum.Debuff, Description:
            "Defense Level decreases based on the effect's value for one turn.",
        ImageLink: './assets/Icons/Statuses/DefenseDown.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Damage Down]': {
        Name: 'Damage Down', Type: StatusTypeEnum.Debuff, Description:
            "Deal less damage with skills based on the effect's value for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/DamageDown.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Fragile]': {
        Name: 'Fragile', Type: StatusTypeEnum.Debuff, Description:
            "Take more damage from skills based on the effect's value for one turn. (Max 10)",
        ImageLink: './assets/Icons/Statuses/Fragile.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Plus Coin Drop]': {
        Name: 'Plus Coin Drop', Type: StatusTypeEnum.Debuff, Description:
            "Reduce the Power of Plus Coins by the effect's Count for one turn.",
        ImageLink: './assets/Icons/Statuses/Coin/PlusCoinDrop.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Minus Coin Boost]': {
        Name: 'Minus Coin Boost', Type: StatusTypeEnum.Debuff, Description:
            "Raise the Power of Minus Coins by the effect's Count for one turn.",
        ImageLink: './assets/Icons/Statuses/Coin/MinusCoinBoost.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Bind]': {
        Name: 'Bind', Type: StatusTypeEnum.Debuff, Description:
            "Speed decreases by the effect's Count for one turn.",
        ImageLink: './assets/Icons/Statuses/Bind.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Paralyze]': {
        Name: 'Paralyze', Type: StatusTypeEnum.Debuff, Description:
            "Fix the Power of Coins to 0 for one turn, with one Coin per the effect's Count.",
        ImageLink: './assets/Icons/Statuses/Paralyze.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[HP Healing Down]': {
        Name: 'HP Healing Down', Type: StatusTypeEnum.Debuff, Description:
            "HP healed by Passives, Skills effects, or Coin effects decreases proportionaly to the value of this effect. (Max 5)",
        ImageLink: './assets/Icons/Statuses/HPHealingDown.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Poison]': {
        Name: 'Poison', Type: StatusTypeEnum.Debuff, Description:
            "At the end of the turn, take fixed damage by the Count, then halve the Count.",
        ImageLink: './assets/Icons/Statuses/Poison.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Immobilized]': {
        Name: 'Immobilized', Type: StatusTypeEnum.Debuff, Description:
            "Does not act for this turn.",
        ImageLink: './assets/Icons/Statuses/Immobilized.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },

    '[Burn]': {
        Name: 'Burn', Type: StatusTypeEnum.Debuff, Description:
            "At the end of the turn, take fixed damage by the effect's Potency.<br>" +
            "Then, reduce its Count by 1.",
        ImageLink: './assets/Icons/Statuses/Burn.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Dark Flame]': {
        Name: 'Dark Flame', Type: StatusTypeEnum.Debuff, Description:
            "- Unique Burn<br>" +
            "- Max Value: 7<br>" +
            "- Target loses Defense Level equal to the value of this effect<br>" +
            "- Turn End: Deal (Value x Burn on target) Pride Affinity damage, then expires",
        ImageLink: './assets/Icons/Statuses/DarkFlame.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Bleed]': {
        Name: 'Bleed', Type: StatusTypeEnum.Debuff, Description:
            "When tossing an attack Coin, take fixed damage by the effect's Potency.<br>" +
            "Then, reduce its Count by 1.",
        ImageLink: './assets/Icons/Statuses/Bleed.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Nails]': {
        Name: 'Nails', Type: StatusTypeEnum.Debuff, Description:
            "Unique Bleed<br>" +
            "Turn Start: Gain 1 Bleed and increase the Bleed count by this effect's Count.<br>" +
            "Turn end: Halve the Count. (Rounded down)",
        ImageLink: './assets/Icons/Statuses/Nails.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Red Plum Blossom]': {
        Name: 'Red Plum Blossom', Type: StatusTypeEnum.Debuff, Description:
            "- Unique Bleed<br>" +
            "- Max Value: 10<br>" +
            "- +10% chance for this unit to be Critically hit if this unit is the main target<br>" +
            "- When struck by a Critical Hit, gain Bleed equal to half of the value and take +(value x 3)% damage on Critical Hit<br>" +
            "- Reduce value by 1 when hit",
        ImageLink: './assets/Icons/Statuses/RedPlumBlossom.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Maggots]': {
        Name: 'Maggots', Type: StatusTypeEnum.Debuff, Description:
            "Turn End: Take Gluttony damage by the Count, then lower it by 1; Bleed Count +1.",
        ImageLink: './assets/Icons/Statuses/Maggots.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Rose Wedge]': {
        Name: 'Rose Wedge', Type: StatusTypeEnum.Debuff, Description:
            "- Max Potency: 10<br>" +
            "- Max Count: 4<br>" +
            "- Gain 1 Potency every time this unit takes 10 Bleed damage<br>" +
            "- When gaining Bleed or 'Unique Bleed' from getting hit, gain 2 Bleed and inflict 1 Bleed against the Attacker (5 times per turn)<br>" +
            "· At 10 Potency, gain +1 Bleed Count as well when triggering the above effect<br>" +
            "- Turn End: lose 1 Count<br>" +
            "- Combat End: at 10 Potency or 1 Count, this effect expires, and this unit takes (Potency x 10) Lust damage.<br>" +
            "- If the unit inflicted with this effect dies, or when this effect expires: increase Bloodfeast by (Potency x 10), and deal (Potency x 2) Lust damage against all of its allies (min 1)",
        ImageLink: './assets/Icons/Statuses/RoseWedge.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Polydipsic Rose]': {
        Name: 'Polydipsic Rose', Type: StatusTypeEnum.Debuff, Description:
            "- Max Value: 5<br>" +
            "- Turn End: at 10+ Bleed Potency, take Lust damage equal to 1% of this unit's max HP. (max 30)<br>" +
            "- Turn End: reduced by 1",
        ImageLink: './assets/Icons/Statuses/PolydipsicRose.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Sewing Target]': {
        Name: 'Sewing Target', Type: StatusTypeEnum.Debuff, Description:
            "- Max Value: 10<br>" +
            "- Take +0.5% more damage for every Bleed on self (max 10%)<br>" +
            "- Turn End: reduced by 1",
        ImageLink: './assets/Icons/Statuses/LineCutting.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Tremor]': {
        Name: 'Tremor', Type: StatusTypeEnum.Debuff, Description:
            "When attacked by skills that burst Tremor, raise the Stagger threshold by the effect's Potency.<br>" +
            "At the end of the turn, reduce the Count by 1.",
        ImageLink: './assets/Icons/Statuses/Tremor.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Tremor Burst]': {
        Name: 'Tremor Burst', Type: StatusTypeEnum.Debuff, Description:
            "Raise target's Stagger Threshold by Tremor Potency on target.",
        ImageLink: './assets/Icons/Statuses/TremorBurst.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Amplitude Conversion]': {
        Name: 'Amplitude Conversion', Type: StatusTypeEnum.Debuff, Description:
            "Converts Tremor or already converted Tremor on target to a different kind of Tremor.<br>" +
            "Potency and Count values do not change over the conversion.",
        ImageLink: './assets/Icons/Statuses/AmplitudeConversion.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Amplitude Entanglement]': {
        Name: 'Amplitude Entanglement', Type: StatusTypeEnum.Debuff, Description:
            "- Fuses the effects of the Tremor type added by Amplitude Entanglement and the Tremor type currently on the target together under Tremor - Superposition.<br>" +
            "- Potency and Count values do not change over Entanglement.<br>" +
            "- When triggering Amplitude Conversion on Tremor - Superposition, it activates as Amplitude Entanglement instead.<br>" +
            "- Turn End: converted into base Tremor.",
        ImageLink: './assets/Icons/Statuses/AmplitudeEntanglement.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Tremor - Superposition]': {
        Name: 'Tremor - Superposition', Type: StatusTypeEnum.Debuff, Description:
            "- Gained through Amplitude Entanglement.<br>" +
            "- When triggering Amplitude Conversion, add the effects of the resulting Tremor type to the list of active Tremor effects under Tremor - Superposition.",
        ImageLink: './assets/Icons/Statuses/TremorSuperposition.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Tremor - Decay]': {
        Name: 'Tremor - Decay', Type: StatusTypeEnum.Debuff, Description:
            "Lose 1 Defense Level for every 4 Tremor Potency on self<br>" +
            "When Hit by Skills that trigger Tremor Burst, raise the Stagger Threshold by the effect's Potency<br>" +
            "Turn End:reduce the Count by 1<br>" +
            "(Interacts the same way as normal Tremor does to effects that raises or reduces Tremor Potency/Count)",
        ImageLink: './assets/Icons/Statuses/TremorDecay.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Tremor - Fracture]': {
        Name: 'Tremor - Fracture', Type: StatusTypeEnum.Debuff, Description:
            "- When Staggered, and when the sum of Tremor Potency and Count adds up to 20 or higher, raise Stagger Level by 1<br>" +
            "- Cannot exceed maximum Stagger Level with this effect<br>" +
            "<br>" +
            "When Hit by Skills that trigger Tremor Burst, raise the Stagger Threshold by the effect's Potency<br>" +
            "Turn End: reduce the Count by 1<br>" +
            "(Interacts the same way as normal Tremor does to effects that raises or reduces Tremor Potency/Count)",
        ImageLink: './assets/Icons/Statuses/TremorFracture.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Tremor - Reverb]': {
        Name: 'Tremor - Reverb', Type: StatusTypeEnum.Debuff, Description:
            "- On Tremor Burst, take Sloth damage equal to Tremor Potency on self.<br>" +
            "- When Hit by Skills that trigger Tremor Burst, raise the Stagger Threshold by the effect's Potency<br>" +
            "- Turn End: reduce the Count by 1<br>" +
            "(Interacts the same way as normal Tremor does to effects that raises or reduces Tremor Potency/Count)",
        ImageLink: './assets/Icons/Statuses/TremorReverb.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Tremor - Everlasting]': {
        Name: 'Tremor - Everlasting', Type: StatusTypeEnum.Debuff, Description:
            "- When hit by Skills or Coin effects that trigger Tremor Burst, (Tremor Potency on self)% chance to trigger an additional Tremor Burst. (max 50%)<br>" +
            "- When hit by Skills or Coin effects that trigger Tremor Burst, (Tremor Count on self)% chance to trigger an additional Tremor Burst. (max 50%)<br>" +
            "- When Hit by Skills that trigger Tremor Burst, raise the Stagger Threshold by the effect's Potency<br>" +
            "- Turn End: reduce the Count by 1<br>" +
            "(Interacts the same way as normal Tremor does to effects that raises or reduces Tremor Potency/Count)",
        ImageLink: './assets/Icons/Statuses/TremorEverlasting.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Tremor - Chain]': {
        Name: 'Tremor - Chain', Type: StatusTypeEnum.Debuff, Description:
            "- Lose 1 Clash Power for every 10 Tremor Potency on self (max 3)<br>" +
            "- When Hit by Skills that trigger Tremor Burst, raise the Stagger Threshold by the effect's Potency<br>" +
            "- Turn End: reduce the Count by 1<br>" +
            "(Interacts the same way as normal Tremor does to effects that raises or reduces Tremor Potency/Count)",
        ImageLink: './assets/Icons/Statuses/TremorChain.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Tremor - Clockwinding]': {
        Name: 'Tremor - Clockwinding', Type: StatusTypeEnum.Debuff, Description:
            "- Max Speed +2<br>" +
            "- Consume Tremor Count on self to inflict 1 more Tremor Potency or Count when inflicting them with this unit's Skill or Coin Effects<br>" +
            "- When Hit by Skills that trigger Tremor Burst, raise the Stagger Threshold by the effect's Potency <br>" +
            "- Turn End: reduce the Count by 1<br>" +
            "(Interacts the same way as normal Tremor does to effects that raises or reduces Tremor Potency/Count)",
        ImageLink: './assets/Icons/Statuses/TremorClockwinding.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Time Moratorium]': {
        Name: 'Time Moratorium', Type: StatusTypeEnum.Debuff, Description:
            "- Does not take any damage as long as this effect is active; store all damage received instead<br>" +
            "- Combat End: If there is only 1 Count left of this effect, the effect triggers Tremor Burst after dealing (100 + (Stack x 15))% of stored damage as Sloth damage<br>" +
            "- Turn End: gain 1 Stack and lose 1 Count<br>" +
            "- The Time Moratorium will immediately expire after triggering the Tremor Burst and the Sloth damage effect if another instance of Time Moratorium is inflicted on a unit with Time Moratorium.",
        ImageLink: './assets/Icons/Statuses/TimeMoratorium.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Rupture]': {
        Name: 'Rupture', Type: StatusTypeEnum.Debuff, Description:
            "When hit by an attack, take fixed damage by the effect's Potency.<br>" +
            "Then, reduce its Count by 1.",
        ImageLink: './assets/Icons/Statuses/Rupture.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Dimensional Rift]': {
        Name: 'Dimensional Rift', Type: StatusTypeEnum.Debuff, Description:
            "At the end of the turn, gain Rupture Count by this effect's amount. Then, remove this effect.",
        ImageLink: './assets/Icons/Statuses/DimensionalRift.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Talisman]': {
        Name: 'Talisman', Type: StatusTypeEnum.Debuff, Description:
            "On hit, inflict Rupture by the Count; When hit, gain Rupture by the Count.<br>" +
            "Turn End: At 6+ Count, remove all Talisman and take fixed damage by its Count.",
        ImageLink: './assets/Icons/Statuses/Talisman.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Lasso]': {
        Name: 'Lasso', Type: StatusTypeEnum.Debuff, Description:
            "- Max Value: 3<br>" +
            "- Turn End: gain Rupture Potency equal to this unit's current Speed value (max 5), and gain 1 Bind next turn<br>" +
            "- Turn End: reduced by 1",
        ImageLink: './assets/Icons/Statuses/Snare.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Sinking]': {
        Name: 'Sinking', Type: StatusTypeEnum.Debuff, Description:
            "When hit by an attack, take fixed SP damage by the effect's Potency. (Units with no Sanity take Gloom damage instead.)<br>" +
            "Then, reduce its Count by 1.",
        ImageLink: './assets/Icons/Statuses/Sinking.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Sinking Fragility]': {
        Name: 'Sinking Fragility', Type: StatusTypeEnum.Debuff, Description:
            "Take +1 Damage per Count from Sinking effects for one turn",
        ImageLink: './assets/Icons/Statuses/SinkingFragility.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Sinking Deluge]': {
        Name: 'Sinking Deluge', Type: StatusTypeEnum.Debuff, Description:
            "Deal SP damage by (Sinking Count * Sinking Potency), then remove Sinking<br>" +
            "If target's SP is -45 or lower, the excess SP damage is dealt as Gloom-affinity HP damage<br>" +
            "(Units with no Sanity take all of it as Gloom HP damage)",
        ImageLink: './assets/Icons/Statuses/SinkingDeluge.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Butterfly]': {
        Name: 'Butterfly', Type: StatusTypeEnum.Debuff, Description:
            '- Unique Sinking<br>' +
            '- Base Value: 0, Max Value: 15<br>' +
            '- The Potency and the Count of this effect is called "The Living" and "The Departed", respectively.<br>' +
            '- When hit, the attacker heals (The Living/4) SP. (min 1; rounded down)<br>' +
            "- When hit, and if this unit's SP is at less than 0, take (Sinking Potency/5) Gloom damage for every value of The Departed. (max Gloom damage 30; rounded down; deals half damage to targets without SP.)<br>" +
            '- Turn End: Reset The Departed of this effect to 0; then, gain Sinking equal to The Living and convert The Living into The Departed.<br>' +
            '- No external effects can raise the amount of Butterfly inflicted. "Inflict additional Sinking" effects inflict additional Sinking instead of additional Butterfly.<br>' +
            '- This effect expires when both The Living and The Departed reach 0.',
        ImageLink: './assets/Icons/Statuses/Butterfly.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[The Uninvited]': {
        Name: 'The Uninvited', Type: StatusTypeEnum.Debuff, Description:
            "- Max Value: 2<br>" +
            "- Upon death, the last attacker heals 3 SP; then, a random ally without this effect gains 2 Stacks of this effect.<br>" +
            "- Take +0.5% more damage for every Sinking on self (max 10%; for Focused Encounters, count Sinking on each Part separately)<br>" +
            "- Turn End: reduced by 1",
        ImageLink: './assets/Icons/Statuses/TheUninvited.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Echoes of the Manor]': {
        Name: 'Echoes of the Manor', Type: StatusTypeEnum.Debuff, Description:
            "- 50% chance to gain 1 Sinking Count when gaining Sinking Potency or Count from Skill or Coin effects<br>" +
            "- Units with SP: Change Panic Type to Echoes of the Manor. When this unit Panics, inflict Echoes of the Manor to 2 random other allies of this unit.<br>" +
            "- Units without SP: -10% chance to flip Heads.<br>" +
            "- Reduce by 1 at Turn End<br>" +
            "This effect is not cumulative; inflicting it will replace the current value with the inflicted value.<br>" +
            '※ Apply the "Units without SP" conditional to certain enemies that have SP but can\'t change their Panic Types.',
        ImageLink: './assets/Icons/Statuses/EchoesOfTheManor.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Impending Ruin]': {
        Name: 'Impending Ruin', Type: StatusTypeEnum.Debuff, Description:
            '- Units with SP: change their Panic Type to "Ruin".<br>' +
            "(Ruin: When this unit enters Low Morale state, gain 3 Sinking at every Turn End and lose 1 Clash Power. When this unit Panics, gain 5 Sinking and 3 Sinking Count at every Turn End and lose 2 Clash Power)<br>" +
            "- Units without SP: -10% chance to flip Heads<br>" +
            "- Reduced by 1 at Turn End<br>" +
            "- This effect is not cumulative; inflicting it will replace the current value with the inflicted value.<br>" +
            '※ Apply the "Units without SP" conditional to certain enemies that have SP but can\'t change their Panic Types.',
        ImageLink: "./assets/Icons/Statuses/ImpendingRuin.png", get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Weakness Analyzed]': {
        Name: 'Weakness Analyzed', Type: StatusTypeEnum.Debuff, Description:
            "A random 'Endure' or 'Normal' attack type resistance is weakened [+0.2 to damage multiplier] for one turn.",
        ImageLink: './assets/Icons/Statuses/WeaknessAnalyzed.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Declared Duel]': {
        Name: 'Declared Duel', Type: StatusTypeEnum.Debuff, Description:
            "In a Clash between the unit that inflicted Declared Duel and the unit with the status, the declarer has +1 Clash Power. On Hit, the declarer gains 1 Haste next turn. (4 times per turn)<br>" +
            "- Expires when the unit inflicts Declared Duel on a different target. Replaced when another unit inflicts Declared Duel on the same target.",
        ImageLink: './assets/Icons/Statuses/DeclaredDuel.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Single Combat]': {
        Name: 'Single Combat', Type: StatusTypeEnum.Neutral, Description:
            "Established when the attacked Slot is target by a single unit, and only by that single unit. This condition is established only between the attacking unit and the attacked Slot. (Does not apply to reused Skills)",
        ImageLink: './assets/Icons/Statuses/SingleCombat.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Focused Attack]': {
        Name: 'Focused Attack', Type: StatusTypeEnum.Debuff, Description:
            "<Focused Encounters Only><br>" +
            "- The unit that inflicted this Focused Attack gains the following effects based on the target Slot's Focused Attack Stack.<br>" +
            " ·1x Stack: Gain Clash Power +1<br>" +
            " ·2x Stack: Gain Base Power +1<br>" +
            " ·3x Stack: Gain Base Power +1 and Coin Power +1<br>" +
            "- Expires if, for a turn, the unit who inflicted it fails to hit the Slot inflicted with their Focused Attack.<br>" +
            "- Expires if the unit who inflicted Focused Attack inflicts it on a different Slot.<br>" +
            "- Replaced if a different unit inflicts Focused Attack on a Slot already inflicted with Focused Attack.<br>" +
            "- At the start of the next turn, if a Slot inflicted with Focused Attack is no longer present, rearrange all Focused Attacks inflicted against the Slots of that Part in the order of Deployment",
        ImageLink: './assets/Icons/Statuses/FocusedAttack.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Gaze]': {
        Name: 'Gaze', Type: StatusTypeEnum.Debuff, Description:
            "Take +20% damage from Pierce and Blunt skills for one turn.<br>" +
            "The ally that defeats the marked unit heals 10SP; if the ally is an 'N Corp. Fanatic', also apply 1 Fanatic next turn.",
        ImageLink: './assets/Icons/Statuses/Gaze.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Vengeance Mark]': {
        Name: 'Vengeance Mark', Type: StatusTypeEnum.Debuff, Description:
            "Applied to the unit that dealt the most damage to an ally (Max 1)",
        ImageLink: './assets/Icons/Statuses/VengeanceMark.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[B.M.]': {
        Name: 'B.M.', Type: StatusTypeEnum.Debuff, Description:
            "Enhances Edgar Family Chief Butler Ryōshū Skills against targets with this effect.<br>" +
            "Turn End: reduce the Count by 1",
        ImageLink: './assets/Icons/Statuses/BM.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Curse]': {
        Name: 'Curse', Type: StatusTypeEnum.Debuff, Description:
            "Turn End: Next turn, randomly gain one of the following, then reduce this effect's Count by 1.<br>" +
            "1 Attack Power Down/1 Defense Power Down/2 Offense Level Down/2 Defense Level Down",
        ImageLink: './assets/Icons/Statuses/Curse.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Pink Ribbons]': {
        Name: 'Pink Ribbons', Type: StatusTypeEnum.Debuff, Description:
            "Count increases by 1 whenever the affected unit tosses an attack skill Coin. At the end of the turn, inflict Bind by the effect's Count, then remove the effect.",
        ImageLink: './assets/Icons/Statuses/PinkRibbons.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Spark Discharge]': {
        Name: 'Spark Discharge', Type: StatusTypeEnum.Debuff, Description:
            "When hit, the attacker gains +1 Charge Count; when hit with a Gloom attack, gain +1 Rupture Count, then reduce Count by 1",
        ImageLink: './assets/Icons/Statuses/SparkDischarge.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Fairy Lure]': {
        Name: 'Fairy Lure', Type: StatusTypeEnum.Debuff, Description:
            "- Max Stack: 5<br>" +
            "- Turn Start: leftmost Slot on the Dashboard gains +10 Aggro<br>" +
            "- Take +50% more damage<br>" +
            "- When hit, inflict 1 Rupture against the attacker (3 times per target's Skill)<br>" +
            "· At less than 50% HP, inflict 1 additional Rupture<br>" +
            "· If the target has 15+ Rupture, this effect does not inflict Rupture<br>" +
            "- Reduced by 1 at Turn End",
        ImageLink: './assets/Icons/Statuses/GlowingLantern.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },

    '[Aggro]': {
        Name: 'Aggro', Type: StatusTypeEnum.Neutral, Description:
            "In focused encounters, slots with higher Aggro values are more likely to be targeted by enemies.",
        ImageLink: './assets/Icons/Statuses/Aggro.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Clashable Guard]': {
        Name: 'Clashable Guard', Type: StatusTypeEnum.Neutral, Description:
            "- On Clash Win: raise the target's Stagger Threshold by this unit's final Clash Power.<br>" +
            "- On Clash Lose: when hit, reduce the attacker's Final Skill Power by this unit's Final Power.<br>" +
            "- On Clash Lose: does not gain Final Power from the following sources: Resonance and the Level disparity against the Attack Skill",
        ImageLink: './assets/Icons/Statuses/ClashableGuard.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Unbreakable Coin]': {
        Name: 'Unbreakable Coin', Type: StatusTypeEnum.Neutral, Description:
            "- This Coin does not break upon Clash Lose.<br>" +
            "- If an Attack Skill has this Coin, attack with this Coin after getting hit.<br>" +
            "- Upon Clash Lose, fix the Coin Power of the unbroken Coin to 1",
        ImageLink: './assets/Icons/Statuses/UnbreakableCoin.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Ammo]': {
        Name: 'Ammo', Type: StatusTypeEnum.Neutral, Description:
            "Spent by certain skills.<br>" +
            "Some attacks cancel if lacking Ammo.",
        ImageLink: './assets/Icons/Statuses/Ammo.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Ammo - Atelier Logic]': {
        Name: 'Ammo - Atelier Logic', Type: StatusTypeEnum.Neutral, Description:
            "Unique Ammo<br>" +
            "Atelier Logic Workshop Special Ammo<br>" +
            "- This Ammo's count cannot be gained or lost due to external effects",
        ImageLink: './assets/Icons/Statuses/AmmoAtelierLogic.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Magic Bullet]': {
        Name: 'Magic Bullet', Type: StatusTypeEnum.Neutral, Description:
            "- Max: 7<br>" +
            "- Value changes depending on certain Skill effects.<br>" +
            "- The higher the value, the higher the Base Power and Coin Power of Skill 3",
        ImageLink: './assets/Icons/Statuses/MagicBullet.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[The Living & The Departed]': {
        Name: 'The Living & The Departed', Type: StatusTypeEnum.Neutral, Description:
            "- Unique Ammo<br>" +
            "- The sum of Potency and Count maxes out at 20.<br>" +
            "- Consumed for certain Skills.<br>" +
            "- Whether The Living(Potency) or The Departed(Count) will be consumed for each shot is randomly determined<br>" +
            "- Some attacks cancel if this unit runs out of ammo.",
        ImageLink: './assets/Icons/Statuses/TheLiving&TheDeparted.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Reload]': {
        Name: 'Reload', Type: StatusTypeEnum.Neutral, Description:
            "- Effect applied to The Living & The Departed(Unique Ammo)<br>" +
            "- Consume (30 - (The Living + The Departed))/2 SP. (rounded down)<br>" +
            "- Reset both The Living and The Departed values on self to 0, and gain the max value of their sum based on the probabilities listed in the Passive 'ISeeTheDyingButterfly.'<br>" +
            "- On Reload, gain at least 1 of The Living and The Departed.",
        ImageLink: './assets/Icons/Statuses/Reload.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Reload (Full-Stop Office)]': {
        Name: 'Reload', Type: StatusTypeEnum.Neutral, Description:
            "Loses all currently owned Ammo, and reload back to full",
        ImageLink: './assets/Icons/Statuses/ReloadFullStop.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, 'Reload (Full-Stop Office)'); }
    },
    '[Discard]': {
        Name: 'Discard', Type: StatusTypeEnum.Neutral, Description:
            "- Delete Skills that fit the condition and are selectable during the Chaining Phase on the Dashboard. (Defensive & E.G.O Skills do not count. Does not delete the Skill from the upcoming Skills list)<br>" +
            "- Discarded Skills will not activate Skill effects or Coin effects other than effects from Discard, and will not give E.G.O resources.",
        ImageLink: './assets/Icons/Statuses/Discard.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Insight]': {
        Name: 'Insight', Type: StatusTypeEnum.Neutral, Description:
            "The rank of the last Skill Discarded by the unit with this effect (Base Value: 1)",
        ImageLink: './assets/Icons/Statuses/Insight.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Erudition]': {
        Name: 'Erudition', Type: StatusTypeEnum.Buff, Description:
            "- Max Value: 6<br>" +
            "- When Discarding a Skill, gain (Erudition x 1.5)% of this unit's max HP as Shield (once per turn)<br>" +
            "- If this unit Discards a Skill at 2+ Insight, gain 1 Clash Power (once per turn)<br>" +
            "- Reduced by 1 when taking HP damage after getting hit by an enemy's Attack Skill<br>" +
            "- Expires when Staggered",
        ImageLink: './assets/Icons/Statuses/Erudition.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[SP Heal Efficiency]': {
        Name: 'SP Heal Efficiency', Type: StatusTypeEnum.Neutral, Description:
            "Amount of SP healed due to the Identity's 'Base factors increasing Sanity(SP)'",
        ImageLink: './assets/Icons/Statuses/SPHealEfficiency.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[SP Loss Efficiency]': {
        Name: 'SP Loss Efficiency', Type: StatusTypeEnum.Neutral, Description:
            "Amount of SP lost due to the Identity's 'Base factors decreasing Sanity(SP)'",
        ImageLink: './assets/Icons/Statuses/SPLossEfficiency.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[K Corp Ampule]': {
        Name: 'K Corp Ampule', Type: StatusTypeEnum.Neutral, Description:
            "Turn Start: At less than 4 Count, heal by (Count * 5)% of Max HP<br>" +
            "At 4+ Count, this unit dies",
        ImageLink: './assets/Icons/Statuses/KCorpAmpule.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Courier Trunk - Rodion]': {
        Name: 'Courier Trunk - Rodion', Type: StatusTypeEnum.Neutral, Description:
            "- Base Value: 0<br>" +
            "- Turn Start: gain 3 Stack<br>" +
            "- Stack does not expire upon Retreat; it is stored instead<br>" +
            "- At 10+ Stack: raise Min & Max Speed values by 1<br>" +
            "- At 20+ Stack: Gain 1 Clash Power Up and 1 Slash DMG Up<br>" +
            "- At 30+ Stack:<br>" +
            "· On Skill Use, take (Stack/3)% HP damage and (Stack/3) SP damage<br>" +
            "· On Turn End, take (Stack/2)% HP damage and (Stack/2) SP damage<br>" +
            "(applies before Retreat)",
        ImageLink: './assets/Icons/Statuses/CourierTrunk.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Courier Trunk - Sinclair]': {
        Name: 'Courier Trunk - Sinclair', Type: StatusTypeEnum.Neutral, Description:
            "- Base Value: 0<br>" +
            "- Turn Start: gain 3 Stack<br>" +
            "- Stack does not expire upon Retreat; it is stored instead<br>" +
            "- At 10+ Stack: raise Min & Max Speed values by 1<br>" +
            "- At 20+ Stack: Gain 1 Clash Power Up and 1 Blunt DMG Up<br>" +
            "- At 30+ Stack:<br>" +
            "· On Skill Use, take (Stack/3)% HP damage and (Stack/3) SP damage<br>" +
            "· On Turn End, take (Stack/2)% HP damage and (Stack/2) SP damage<br>" +
            "(applies before Retreat)",
        ImageLink: './assets/Icons/Statuses/CourierTrunk.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Strategic R&R Mode]': {
        Name: 'Strategic R&R Mode', Type: StatusTypeEnum.Neutral, Description:
            "- Turn End: recover from Stagger and Retreat from the Encounter (unless it's a forced Stagger; does not count as death)<br>" +
            "· In Chain Battles, give this unit's Slots to a Substituted unit and move to the rearmost place in the Backup units' Deployment order (escape from the Encounter entirely if there are no other Backup Units remaining to swap places with next turn. When returning to battle, return in the order they retreated in)<br>" +
            "· When returning to battle, return with the same amount of HP and SP this unit had when it retreated, and eliminate all effects on self save for a select few (if this unit had less than 0 SP when retreating, reset SP to 0 instead)",
        ImageLink: './assets/Icons/Statuses/StrategicR&RMode.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Overwatch Assignment]': {
        Name: 'Overwatch Assignment', Type: StatusTypeEnum.Neutral, Description:
            "- Turn End: recover from Stagger and Retreat from the Encounter (unless it's a forced Stagger; does not count as death)<br>" +
            "· In Chain Battles, give this unit's Slots to a Substituted unit and move to the rearmost place in the Backup units' Deployment order (escape from the Encounter entirely if there are no other Backup Units remaining to swap places with next turn. When returning to battle, return in the order they retreated in)<br>" +
            "· When returning to battle, return with the same amount of HP and SP this unit had when it retreated, and eliminate all effects on self save for a select few (if this unit had less than 0 SP when retreating, reset SP to 0 instead)",
        ImageLink: './assets/Icons/Statuses/OverwatchAssignment.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Target Spotted]': {
        Name: 'Target Spotted', Type: StatusTypeEnum.Neutral, Description:
            "If unit A applies this effect to unit B: Unit B follows up with an Unopposed Attack with its Skill 2 against the same enemy Unit A attacked with its Skill. Activates at Unit A's Attack End.<br>" +
            "- The Skill used due to this effect does not affect Unit B's upcoming Skills list.",
        ImageLink: './assets/Icons/Statuses/TargetSpotted.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Melee Support]': {
        Name: 'Melee Support', Type: StatusTypeEnum.Neutral, Description:
            "- If unit A applies this effect to unit B: Unit B follows up with an Unopposed Attack with the 'Melee Support' Skill against the same enemy that attacked Unit A. Activates at Unit A's Skill End.<br>" +
            "- The Skill used due to the 'Melee Support' effect does not affect Unit B's upcoming Skills list.",
        ImageLink: './assets/Icons/Statuses/MeleeSupport.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Bloodfeast]': {
        Name: 'Bloodfeast', Type: StatusTypeEnum.Neutral, Description:
            "- Max Value: 999<br>" +
            "- Stores all Bleed damage dealt in this zone<br>" +
            "- Resets when moving to a different zone<br>" +
            "- This value is shared by all characters<br>" +
            "- If there is a higher Kindred among the allies who also consumes Bloodfeast, this unit cannot consume Bloodfeast until that ally consumes it first.",
        ImageLink: './assets/Icons/Statuses/Bloodfeast.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Bloodfeast Consumed]': {
        Name: 'Bloodfeast Consumed', Type: StatusTypeEnum.Neutral, Description:
            "- Max Value: 999<br>" +
            "- Displays the total amount of Bloodfeast consumed in this Encounter",
        ImageLink: './assets/Icons/Statuses/TotalBloodfeastConsumed.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Bloodfeast Consumed (shared)]': {
        Name: 'Bloodfeast Consumed (shared)', Type: StatusTypeEnum.Neutral, Description:
            "Total Bloodfeast consumed in this Encounter",
        ImageLink: './assets/Icons/Statuses/TotalBloodfeastConsumed.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Bloodied Hand]': {
        Name: 'Bloodied Hand', Type: StatusTypeEnum.Neutral, Description:
            "- Max Value: 30<br>" +
            "- Stage 1 Bloodied Hand<br>" +
            "- At 10+ Bloodied Hand, converts to Bloodied Hand II.<br>" +
            "- At 20+ Bloodied Hand, converts to Bloodied Hand III.<br>" +
            "- Reverts to previous Stage when the Stack drops below the requirements.<br>" +
            "- At Bloodied Hand II, gain 1 Offense Level Up based on the Stack<br>" +
            "- At Bloodied Hand III, gain 1 Offense Level Up based on the Stack, and additionally inflict 1 Rupture and 1 Bleed On Hit with Base Skills",
        ImageLink: './assets/Icons/Statuses/BloodiedHand.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Ailing Heart]': {
        Name: 'Ailing Heart', Type: StatusTypeEnum.Neutral, Description:
            "- Max Value: 10<br>" +
            "- Turn End: gain 1 Stack<br>" +
            "- Turn Start: gain 1 Defense Level Up for every 3 Stack<br>" +
            "- At 50%- HP, gain 1 Defense Level for every 3 Stack<br>" +
            "- At 40%- HP, On Hit with Base Skills, heal (Stack x 5)% of damage dealt On Hit as HP (min 1; rounded down; heal up to 30 HP per Skill)",
        ImageLink: './assets/Icons/Statuses/BloodiedHand.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Responsibility]': {
        Name: 'Responsibility', Type: StatusTypeEnum.Neutral, Description:
            "- Max Value: 1<br>" +
            "- Clash Power +1<br>" +
            "- Deal +20% more damage<br>" +
            "- Take +20% more damage",
        ImageLink: './assets/Icons/Statuses/Responsibility.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Dark Cloud]': {
        Name: 'Dark Cloud', Type: StatusTypeEnum.Neutral, Description:
            "Max Stack: 1<br>" +
            "Converts all of this unit's Base Attack Skill Coins used this turn to Unbreakable Coins, prevents damage from Staggering this unit until Skill End, and inflict +1 more of Bleed effects<br>" +
            "On Clash Lose: gain Final Power +3<br>" +
            "Turn End: this effect expires",
        ImageLink: './assets/Icons/Statuses/DarkCloud.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Final Augment]': {
        Name: 'Final Augment', Type: StatusTypeEnum.Neutral, Description:
            "Turn Start: Gain 3 Attack Power Up, Defense Power Up, and Haste; die when count reaches zero.",
        ImageLink: './assets/Icons/Statuses/FinalAugment.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Surgery]': {
        Name: 'Surgery', Type: StatusTypeEnum.Neutral, Description:
            "Die when Count reaches 5.<br>" +
            "Reduce Max HP by 20% (per Count).<br>" +
            "Deal 20% (per Count) more damage.<br>" +
            "At the start of the turn, gain Haste by the effect's Count.",
        ImageLink: './assets/Icons/Statuses/Surgery.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Blubberbubble]': {
        Name: 'Blubberbubble', Type: StatusTypeEnum.Neutral, Description:
            "- This effect counts as a 'Shield Management' effect.<br>" +
            "- Turn End: Reduce Count by 1<br>" +
            "- This unit does not lose Shield at Turn End as long as it has the Blubberbubble effect (unless depleted by damage or effect)<br>" +
            "- If the Shield affected by Blubberbubble breaks due to taking damage, inflict 4 Sinking Potency/Count against the attacker. (How much of that '4' value is Potency or Count is randomly determined)<br>" +
            "- This unit can stack their Shield value by stacking this effect. However, as long as Blubberbubble is in effect, the Shield value cannot exceed 60% of this unit's Max HP.",
        ImageLink: './assets/Icons/Statuses/Blubberbubble.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Torn Memory]': {
        Name: 'Torn Memory', Type: StatusTypeEnum.Neutral, Description:
            "- Max Value: 7<br>" +
            "- Used for certain Skills",
        ImageLink: './assets/Icons/Statuses/TornMemory.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },
    '[Volatile Passion]': {
        Name: 'Torn Memory', Type: StatusTypeEnum.Neutral, Description:
            "- On Hit, inflict 1 Burn<br>" +
            "- If the main target has Burn, gain Final Power<br>" +
            "- When hit, if this unit had a Defense Skill chained at Combat Start, inflict Burn against the attacker for the turn<br>" +
            "- Turn End: lose (# of turns spent in Volatile E.G.O state x 5) SP. (Max SP Loss: 40)",
        ImageLink: './assets/Icons/Statuses/VolatilePassion.png', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); }
    },


    '[On Use]': { Name: '[On Use]', Type: StatusTypeEnum.ActivationKeyword, Description: '', ImageLink: 'RGB(38, 205, 251)', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); } },

    '[Before Use]': { Name: '[Before Use]', Type: StatusTypeEnum.ActivationKeyword, Description: '', ImageLink: 'RGB(146, 239, 61)', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); } },
    '[Before Attack]': { Name: '[Before Attack]', Type: StatusTypeEnum.ActivationKeyword, Description: '', ImageLink: 'RGB(146, 239, 61)', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); } },
    '[Combat Start]': { Name: '[Combat Start]', Type: StatusTypeEnum.ActivationKeyword, Description: '', ImageLink: 'RGB(146, 239, 61)', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); } },
    '[On Hit]': { Name: '[On Hit]', Type: StatusTypeEnum.ActivationKeyword, Description: '', ImageLink: 'RGB(146, 239, 61)', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); } },
    '[On Crit]': { Name: '[On Crit]', Type: StatusTypeEnum.ActivationKeyword, Description: '', ImageLink: 'RGB(146, 239, 61)', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); } },
    '[On Crit Kill]': { Name: '[On Crit Kill]', Type: StatusTypeEnum.ActivationKeyword, Description: '', ImageLink: 'RGB(146, 239, 61)', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); } },
    '[Hit after Clash Win]': { Name: '[Hit after Clash Win]', Type: StatusTypeEnum.ActivationKeyword, Description: '', ImageLink: 'RGB(146, 239, 61)', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); } },
    '[Hit After Clash Win]': { Name: '[Hit After Clash Win]', Type: StatusTypeEnum.ActivationKeyword, Description: '', ImageLink: 'RGB(146, 239, 61)', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); } },
    '[Heads Hit After Clash Win]': { Name: '[Heads Hit After Clash Win]', Type: StatusTypeEnum.ActivationKeyword, Description: '', ImageLink: 'RGB(146, 239, 61)', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); } },
    '[Reuse - Heads Hit]': { Name: '[Reuse - Heads Hit]', Type: StatusTypeEnum.ActivationKeyword, Description: '', ImageLink: 'RGB(146, 239, 61)', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); } },
    '[On Kill]': { Name: '[On Kill]', Type: StatusTypeEnum.ActivationKeyword, Description: '', ImageLink: 'RGB(146, 239, 61)', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); } },
    '[On Ally Kill]': { Name: '[On Ally Kill]', Type: StatusTypeEnum.ActivationKeyword, Description: '', ImageLink: 'RGB(146, 239, 61)', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); } },
    '[On Target Kill]': { Name: '[On Target Kill]', Type: StatusTypeEnum.ActivationKeyword, Description: '', ImageLink: 'RGB(146, 239, 61)', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); } },
    '[Failed Kill]': { Name: '[Failed Kill]', Type: StatusTypeEnum.ActivationKeyword, Description: '', ImageLink: 'RGB(146, 239, 61)', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); } },
    '[On Ally Kill Fail]': { Name: '[On Ally Kill Fail]', Type: StatusTypeEnum.ActivationKeyword, Description: '', ImageLink: 'RGB(146, 239, 61)', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); } },
    '[After Attack]': { Name: '[After Attack]', Type: StatusTypeEnum.ActivationKeyword, Description: '', ImageLink: 'RGB(146, 239, 61)', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); } },
    '[Skill End]': { Name: '[Skill End]', Type: StatusTypeEnum.ActivationKeyword, Description: '', ImageLink: 'RGB(146, 239, 61)', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); } },

    '[On Evade]': { Name: '[On Evade]', Type: StatusTypeEnum.ActivationKeyword, Description: '', ImageLink: 'RGB(198, 253, 148)', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); } },
    '[Heads Hit]': { Name: '[Heads Hit]', Type: StatusTypeEnum.ActivationKeyword, Description: '', ImageLink: 'RGB(198, 253, 148)', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); } },
    '[Tails Hit]': { Name: '[Tails Hit]', Type: StatusTypeEnum.ActivationKeyword, Description: '', ImageLink: 'RGB(198, 253, 148)', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); } },
    '[Turn End]': { Name: '[Turn End]', Type: StatusTypeEnum.ActivationKeyword, Description: '', ImageLink: 'RGB(198, 253, 148)', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); } },

    '[Clash Win]': { Name: '[Clash Win]', Type: StatusTypeEnum.ActivationKeyword, Description: '', ImageLink: 'RGB(253, 126, 0)', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); } },
    '[Clashable Counter]': { Name: '[Clashable Counter]', Type: StatusTypeEnum.ActivationKeyword, Description: '', ImageLink: 'RGB(253, 126, 0)', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); } },

    '[Heads Attack End]': { Name: '[Heads Attack End]', Type: StatusTypeEnum.ActivationKeyword, Description: '', ImageLink: 'RGB(253, 90, 192)', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); } },
    '[Crit Attack End]': { Name: '[Crit Attack End]', Type: StatusTypeEnum.ActivationKeyword, Description: '', ImageLink: 'RGB(253, 90, 192)', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); } },

    '[Tails Attack End]': { Name: '[Tails Attack End]', Type: StatusTypeEnum.ActivationKeyword, Description: '', ImageLink: 'RGB(201, 0, 128)', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); } },

    '[Clash Lose]': { Name: '[Clash Lose]', Type: StatusTypeEnum.ActivationKeyword, Description: '', ImageLink: 'RGB(225, 0, 0)', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); } },
    '[Indiscriminate]': { Name: '[Indiscriminate]', Type: StatusTypeEnum.ActivationKeyword, Description: '', ImageLink: 'RGB(225, 0, 0)', get HtmlString() { return CreateHtmlString(this.Name, this.Type, this.ImageLink, this.Name); } },

};