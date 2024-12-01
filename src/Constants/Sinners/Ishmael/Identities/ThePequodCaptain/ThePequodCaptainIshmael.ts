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
import { ThePequodCaptainIshmaelDefense } from "./ThePequodCaptainIshmaelDefense";
import { ThePequodCaptainIshmaelSkill1 } from "./ThePequodCaptainIshmaelSkill1";
import { ThePequodCaptainIshmaelSkill2 } from "./ThePequodCaptainIshmaelSkill2";
import { ThePequodCaptainIshmaelSkill3 } from "./ThePequodCaptainIshmaelSkill3";

export const ThePequodCaptainIshmael: Identity = {
    Id: 10808,
    Name: "The Pequod Captain",
    Sinner: SinnerEnum.Ishmael,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 68,
    HealthPerLevel: 2.3,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -3,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [ThePequodCaptainIshmaelSkill1, 
            ThePequodCaptainIshmaelSkill2, 
            ThePequodCaptainIshmaelSkill3, 
            ThePequodCaptainIshmaelDefense],
    Passives: [
        new Passive("Hour of the Hunt",
            PassiveTypeEnum.Combat,
            'If the target is a &ltLake Entity&gt, deal +10% damage'),

        new Passive("Captain of the Pequod",
            PassiveTypeEnum.Combat,
            "- After Attack: if the target is defeated by this unit's attack,<br>"+
            "- Gain 4 [Poise] and +2 [Poise] Count. Then, gain [Overheated Gas Harpoon] next turn.<br>"+
            "- 2 other allies with the least SP heal 7 SP and gain 4 [Poise]<br>"+
            "- If the allies are from The Pequod, heal additional 5 SP. Then, once per turn, apply 1 [Pierce Power Up] next turn.",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Captain's Orders",
            PassiveTypeEnum.Support,
            "After Attack: 1 ally with the highest SP gains 2 [Poise] and +2 [Poise] Count when the target is defeated after that unit's attack (2 times per turn)",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Ishmael/Identities/ThePequodCaptain/10808gacksung.png",
    PortraitImageDir: "./assets/Sinners/Ishmael/Identities/ThePequodCaptain/10808gacksunginfo.png"
}