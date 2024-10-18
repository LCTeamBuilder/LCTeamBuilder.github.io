import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { ThePequodCaptainIshmaelSkill1 } from "./ThePequodCaptainIshmaelSkill1";
import { ThePequodCaptainIshmaelSkill2 } from "./ThePequodCaptainIshmaelSkill2";
import { ThePequodCaptainIshmaelSkill3 } from "./ThePequodCaptainIshmaelSkill3";
import { ThePequodCaptainIshmaelDefense } from "./ThePequodCaptainIshmaelDefense";

export class ThePequodCaptainIshmael implements IdentityBase{
    readonly Id: number = 10808;
    readonly Name: string = "The Pequod Captain";
    readonly Sinner: SinnerEnum = SinnerEnum.Ishmael;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 68;
    readonly HealthPerLevel: number = 2.3;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = -3;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new ThePequodCaptainIshmaelSkill1, 
                                new ThePequodCaptainIshmaelSkill2, 
                                new ThePequodCaptainIshmaelSkill3, 
                                new ThePequodCaptainIshmaelDefense];
    readonly Passives: Passive[] = [
        new Passive("Hour of the Hunt",
            PassiveTypeEnum.Combat,
            'If the target is a &lt;Lake Entity&gt;, deal +10% damage'),

        new Passive("Captain of the Pequod",
            PassiveTypeEnum.Combat,
            "- After Attack: if the target is defeated by this unit's attack,<br>"+
            "- Gain 4 [Poise] and +2 [Poise] Count. Then, gain [Overheated Gas Harpoon] next turn.<br>"+
            "- 2 other allies with the least SP heal 7 SP and gain 4 [Poise]<br>"+
            "- If the allies are from The Pequod, heal additional 5 SP. Then, once per turn, apply 1 [Pierce Power Up] next turn.",
            [{sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Captain's Orders",
            PassiveTypeEnum.Support,
            "After Attack: 1 ally with the highest SP gains 2 [Poise] and +2 [Poise] Count when the target is defeated after that unit's attack (2 times per turn)",
            [{sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Ishmael/Identities/ThePequodCaptain/10808gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Ishmael/Identities/ThePequodCaptain/10808gacksunginfo.png";
}