import SPELLS from 'common/SPELLS';
import CoreCooldownThroughputTracker, {
  BUILT_IN_SUMMARY_TYPES,
} from 'parser/shared/modules/CooldownThroughputTracker';
import { TALENTS_MONK } from 'common/TALENTS';

class CooldownThroughputTracker extends CoreCooldownThroughputTracker {
  static cooldownSpells = [
    ...CoreCooldownThroughputTracker.cooldownSpells,
    {
      spell: TALENTS_MONK.SERENITY_TALENT.id,
      summary: [BUILT_IN_SUMMARY_TYPES.DAMAGE],
    },
  ];

  static castCooldowns = [
    ...CoreCooldownThroughputTracker.castCooldowns,
    {
      spell: SPELLS.STORM_EARTH_AND_FIRE_CAST.id,
      summary: [BUILT_IN_SUMMARY_TYPES.DAMAGE],
    },
    {
      spell: SPELLS.INVOKE_XUEN_THE_WHITE_TIGER.id,
      summary: [BUILT_IN_SUMMARY_TYPES.DAMAGE],
    },
  ];
}

export default CooldownThroughputTracker;
