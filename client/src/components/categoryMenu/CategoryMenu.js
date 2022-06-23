import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from '../../utils/actions';
import { QUERY_CATEGORES } from '../../utils/queries';
import { idbPromis } from '../../utils/helpers';