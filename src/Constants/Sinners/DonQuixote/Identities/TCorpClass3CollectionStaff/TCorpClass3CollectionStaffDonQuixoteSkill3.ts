import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TCorpClass3CollectionStaffDonQuixoteSkill3: Skill = {
    Name: "I Command Thee, Halt!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] +1 Clash Power for every 6 [Tremor] on target (max 2)<br>"+
            "[On Use] If the target has [Bind], gain Clash Power +1<br>"+
            "[On Use] Consume 10 [Tremor] Count on self to gain Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Tremor]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Tremor]", 2),
        new SkillDescriptionPart("[On Hit] If the target has 10+ [Tremor] , consume 10 [Tremor] on target and inflict 2 [Time Moratorium]<br>"+
            "[On Hit] If this unit is in a [Borrowed Time] state, this effect does not consume the target's [Tremor]<br>"+
            "[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1<br>"+
            "[On Hit] If the target's Speed is slower than this unit's, trigger [Amplitude Conversion] into [Tremor - Chain]", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/TCorpClass3CollectionStaff/ICommandTheeHalt.png"
}