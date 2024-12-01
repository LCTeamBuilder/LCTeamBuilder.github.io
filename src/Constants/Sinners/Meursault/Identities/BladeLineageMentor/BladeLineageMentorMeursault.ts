import {
    FactionEnum,
    KeywordEnum,
    PassiveCostTypeEnum,
    PassiveTypeEnum,
    RarityEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Identity, Passive } from "../../../../../Models/Index";
import { BladeLineageMentorMeursaultDefense } from "./BladeLineageMentorMeursaultDefense";
import { BladeLineageMentorMeursaultSkill1 } from "./BladeLineageMentorMeursaultSkill1";
import { BladeLineageMentorMeursaultSkill2 } from "./BladeLineageMentorMeursaultSkill2";
import { BladeLineageMentorMeursaultSkill3 } from "./BladeLineageMentorMeursaultSkill3";
import { BladeLineageMentorMeursaultSkill4 } from "./BladeLineageMentorMeursaultSkill4";

export const BladeLineageMentorMeursault: Identity = {
    Id: 10508,
    Name: "Blade Lineage Mentor",
    Sinner: SinnerEnum.Meursault,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 82,
    HealthPerLevel: 2.73,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [80, 20],
    DefenseLevel: +3,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [BladeLineageMentorMeursaultSkill1,
            BladeLineageMentorMeursaultSkill2,
            BladeLineageMentorMeursaultSkill3,
            BladeLineageMentorMeursaultSkill4,
            BladeLineageMentorMeursaultDefense],
    Passives: [
        new Passive("In Memoriam",
            PassiveTypeEnum.Combat,
            "When 3 or more other Blade Lineage allies are defeated:<br>"+
            "- When gaining [Poise] Potency/Count with this unit's own Skills and Coin effects: gain 1 more of each<br>"+
            "- When 5 or more other Blade Lineage allies are defeated, gain 2 more of each instead<br>"+
            "- Combat Start: Apply [Swordplay of the Homeland] buff on self"),

        new Passive("Swordplay of the Homeland",
            PassiveTypeEnum.Combat,
            "In this Encounter, when this unit takes damage that brings their HP down to 0, nullify that damage, then, this unit's HP cannot drop below 1 for the turn. (Once per Encounter)<br><br>"+
            
            "When this unit gains [Poise] Potency/Count with its own Skill or Coin effects: give 1 [Poise] Potency and +1 [Poise] Count to 2 other Blade Lineage allies with no [Poise] or with the least [Poise]<br>"+
            "- If there are 6 or more Blade Lineage allies participating in this Encounter, give 2 [Poise] Potency and +2 [Poise] Count instead<br><br>"+

            "- Combat Start: Apply [Swordplay of the Homeland] buff to all other Blade Lineage allies",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Swordplay of the Homeland",
            PassiveTypeEnum.Support,
            "1 ally with the most [Poise] on Combat Start deals +15% Slash damage on Critical Hits",
            [{ sin: SinEnum.Pride, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Meursault/Identities/BladeLineageMentor/10508gacksung.png",
    PortraitImageDir: "./assets/Sinners/Meursault/Identities/BladeLineageMentor/10508gacksunginfo.png"
}