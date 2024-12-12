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
import { TheManagerOfLaManchalandDonQuixoteDefense } from "./TheManagerOfLaManchalandDonQuixoteDefense";
import { TheManagerOfLaManchalandDonQuixoteDefense2 } from "./TheManagerOfLaManchalandDonQuixoteDefense2";
import { TheManagerOfLaManchalandDonQuixoteSkill11 } from "./TheManagerOfLaManchalandDonQuixoteSkill11";
import { TheManagerOfLaManchalandDonQuixoteSkill12 } from "./TheManagerOfLaManchalandDonQuixoteSkill12";
import { TheManagerOfLaManchalandDonQuixoteSkill21 } from "./TheManagerOfLaManchalandDonQuixoteSkill21";
import { TheManagerOfLaManchalandDonQuixoteSkill22 } from "./TheManagerOfLaManchalandDonQuixoteSkill22";
import { TheManagerOfLaManchalandDonQuixoteSkill31 } from "./TheManagerOfLaManchalandDonQuixoteSkill31";
import { TheManagerOfLaManchalandDonQuixoteSkill32 } from "./TheManagerOfLaManchalandDonQuixoteSkill32";

export const TheManagerOfLaManchalandDonQuixote: Identity = {
    Id: 10310,
    Name: "The Manager of La Manchaland",
    Sinner: SinnerEnum.DonQuixote,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 63,
    HealthPerLevel: 2.17,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 40, 20],
    DefenseLevel: 0,
    SlashResist: 2,
    PierceResist: 0.5,
    BluntResist: 1,
    Skills: [TheManagerOfLaManchalandDonQuixoteSkill11,
            TheManagerOfLaManchalandDonQuixoteSkill12, 
            TheManagerOfLaManchalandDonQuixoteSkill21, 
            TheManagerOfLaManchalandDonQuixoteSkill22, 
            TheManagerOfLaManchalandDonQuixoteSkill31, 
            TheManagerOfLaManchalandDonQuixoteSkill32, 
            TheManagerOfLaManchalandDonQuixoteDefense, 
            TheManagerOfLaManchalandDonQuixoteDefense2],
    Passives: [      
        new Passive("Bloodfeast",
            PassiveTypeEnum.Combat,
            "If this unit is on field, or is one of the units that can appear on this Stage, increase [Bloodfeast] value by the amount of [Bleed] damage collectively received by every unit.<br>"+
            "When this unit enters the field, the sleeping blood drenching the battlefield will rise above the surface.<br><br>"+
            
            "When consuming [Bloodfeast], if there are &ltLa Manchaland&gt Kindreds of the same generation as this unit, this unit takes precedence.<br><br>"+
        
            "When using 'Variant Sancho Hardblood Arts 9 - Whip', HP cannot drop below 1 due to [Bleed] damage."),

        new Passive("Variant Sancho Hardblood Arts",
            PassiveTypeEnum.Combat,
            "Turn Start: At 15+ [Hardblood], if each following unit is either defeated or participating in the Encounter, empower this unit's leftmost Slot.<br>"+
            "- The Priest of La Manchaland Gregor: Empower Skill 1<br>"+
            "- The Barber of La Manchaland Outis: Empower Skill 2<br>"+
            "- This Unit: Empower Skill 3<br>"+
            "- The Princess of La Manchaland Rodion: Empower Defense Skill<br><br>"+

            "When other units among allies take [Bleed] damage or consume [Bloodfeast], gain 2 [Hardblood] on self (3 times per turn)"),
            
        new Passive("Bearer of the Blood Kin",
            PassiveTypeEnum.Combat,
            "In an Encounter, if another allied <La Manchaland> unit is defeated:<br>"+
            "- Gain 1 more [Hardblood] when gaining [Hardblood] from this unit's Base Attack Skills<br>"+
            "- When 3+ other allied &ltLa Manchaland&gt units are defeated: gain 3 additional [Hardblood]; at Turn Start: gain 1 [Responsibility]"),

        new Passive("Armadura de Sangre",
            PassiveTypeEnum.Combat,
            "After Attack: if the enemy is defeated, increase [Bloodfeast] by 10% of the target's max HP (100 per turn; for Focused Encounters, if the Part is broken)<br><br>"+

            "Gain 1 [Damage Up] next turn for every 15% missing HP at Turn End (max 3)<br>"+
            "If an ally is about to be defeated from [Bleed] damage, prevent them from being defeated from [Bleed] damage for the turn (once per Encounter for each Identity)",
            [{ sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("'Feed your repressed hunger, my Family'",
            PassiveTypeEnum.Support,
            "Combat Start: 1 ally with the least HP gains 1 [Damage Up] for every 20% missing HP (max 3)<br>"+
            "- If the said ally is a &ltBloodfiend&gt, gain 1 [Damage Up] for every 15% missing HP instead. (max 3)",
            [{ sin: SinEnum.Lust, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/DonQuixote/Identities/TheManagerOfLaManchaland/10310gacksung.png",
    PortraitImageDir: "./assets/Sinners/DonQuixote/Identities/TheManagerOfLaManchaland/10310gacksunginfo.png"
}