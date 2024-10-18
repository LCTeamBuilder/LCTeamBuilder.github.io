import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { LCBSinnerRodionSkill1 } from "./LCBSinnerRodionSkill1";
import { LCBSinnerRodionSkill2 } from "./LCBSinnerRodionSkill2";
import { LCBSinnerRodionSkill3 } from "./LCBSinnerRodionSkill3";
import { LCBSinnerRodionDefense } from "./LCBSinnerRodionDefense";

export class LCBSinnerRodion implements IdentityBase{
    readonly Id: number = 10901;
    readonly Name: string = "LCB Sinner";
    readonly Sinner: SinnerEnum = SinnerEnum.Rodion;
    readonly Rarity: RarityEnum = RarityEnum.OneStar;
    readonly BaseHealth: number = 78;
    readonly HealthPerLevel: number = 2.69;
    readonly SpeedMin: number = 2;
    readonly SpeedMax: number = 5;
    readonly StaggerHpPercentThresholds: number[] = [65, 35, 15];
    readonly DefenseLevel: number = +0;
    readonly SlashResist: number = 0.5;
    readonly PierceResist: number = 2;
    readonly BluntResist: number = 1;
    readonly Skills: Skill[] = [new LCBSinnerRodionSkill1, 
                                new LCBSinnerRodionSkill2, 
                                new LCBSinnerRodionSkill3, 
                                new LCBSinnerRodionDefense];
    readonly Passives: Passive[] = [
        new Passive("Split Evil",
            PassiveTypeEnum.Combat,
            "On hit, inflict 1 [Bleed] at a 50% chance.",
            [{sin: SinEnum.Wrath , amount: 5}],
            PassiveCostTypeEnum.Owned),

        new Passive("Gambler",
            PassiveTypeEnum.Support,
            "1 ally with the most HP deals +20% damage with Heads Coins.",
            [{sin: SinEnum.Wrath, amount: 5}],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Rodion/Identities/LCBSinner/10901normal.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Rodion/Identities/LCBSinner/10901normalinfo.png";
}