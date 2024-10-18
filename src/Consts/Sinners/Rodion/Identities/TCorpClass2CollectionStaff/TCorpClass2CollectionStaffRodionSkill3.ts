import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class TCorpClass2CollectionStaffRodionSkill3 implements Skill {
    readonly Name: string = "Execute Collections";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Sloth;
    readonly BaseValue: number = 2;
    readonly Coins: number = 4;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Deal +5% more damage for every [Bind] on target (max 20%)<br>"+
            "[On Use] If the target has 8+ [Tremor], Clash Power +2<br>"+
            "[On Use] Consume 8 [Tremor] Count on self to gain Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Tremor] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Tremor]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Tremor]", 3),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bind] next turn<br>"+
            "[On Hit] If this unit consumed [Tremor] Count with Skill use, inflict 2 [Bind] next turn<br>"+
            "[On Hit] If this unit is in a [Borrowed Time] state, inflict 2 [Time Moratorium]<br>"+
            "[On Hit] Trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1", 4)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Rodion/TCorpClass2CollectionStaff/ExecuteCollections.png";
}