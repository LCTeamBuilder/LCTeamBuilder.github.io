import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { LiuAssocSouthSection5HongLuSkill1 } from "./LiuAssocSouthSection5HongLuSkill1";
import { LiuAssocSouthSection5HongLuSkill2 } from "./LiuAssocSouthSection5HongLuSkill2";
import { LiuAssocSouthSection5HongLuSkill3 } from "./LiuAssocSouthSection5HongLuSkill3";
import { LiuAssocSouthSection5HongLuDefense } from "./LiuAssocSouthSection5HongLuDefense";

export class LiuAssocSouthSection5HongLu implements IdentityBase{
    readonly Id: number = 10604;
    readonly Name: string = "Liu Assoc. South Section 5";
    readonly Sinner: SinnerEnum = SinnerEnum.HongLu;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 76;
    readonly HealthPerLevel: number = 2.6;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [70, 30];
    readonly DefenseLevel: number = +1
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new LiuAssocSouthSection5HongLuSkill1, 
                                new LiuAssocSouthSection5HongLuSkill2, 
                                new LiuAssocSouthSection5HongLuSkill3, 
                                new LiuAssocSouthSection5HongLuDefense];
    readonly Passives: Passive[] = [
        new Passive("Flaring Up",
            PassiveTypeEnum.Combat,
            "At 30+ SP, inflict +1 [Burn] Count with the effects of attack Skills/Coins.",
            [{sin: SinEnum.Wrath, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Isn't It Warm?",
            PassiveTypeEnum.Support,
            "1 ally with the most SP inflicts +1 [Burn] Count with the effects of their attack Skills/Coins.",
            [{sin: SinEnum.Wrath, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/HongLu/Identities/LiuAssociationSouthSection5/10604gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/HongLu/Identities/LiuAssociationSouthSection5/10604gacksunginfo.png";
}