import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class SolemnLamentGregorCorrosion implements Skill{
    readonly Name: string = "Solemn Lament";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 32;
    readonly Coins: number = 1;
    readonly CoinValue: number = -8;
    readonly AttackWeight: number = 5;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "If the target has less than 0 SP, deal more damage the further their SP value is from 0 (+1% more damage for every missing SP, max 45%)<br>"+
            "Against targets without SP: deal +1% more damage for every 2 [Sinking] on the target (max 45%)<br>"+
            "[On Kill] Heal 5 SP"),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Butterfly] (The Living)<br>"+
            "[On Hit] Inflict 5 [Butterfly] (The Departed)<br>"+
            "[On Hit] Inflict +3 [Sinking] Count<br>"+
            '[On Hit] If the target has 50%- HP, inflict Gloom Damage equal to "All" [Butterfly] values on the target<br>'+
            '- "All" = the sum of both The Living and The Departed on the target', 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Gregor/EGO/SolemnLament/21207erosionprofile.png";
}