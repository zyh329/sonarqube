/*
 * SonarQube
 * Copyright (C) 2009-2016 SonarSource SA
 * mailto:contact AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import { collapsedDirFromPath, fileFromPath } from '../path';

describe('#collapsedDirFromPath()', function () {
  it('should return null when pass null', function () {
    expect(collapsedDirFromPath(null)).toBeNull();
  });

  it('should return "/" when pass "/"', function () {
    expect(collapsedDirFromPath('/')).toBe('/');
  });

  it('should not cut short path', function () {
    expect(collapsedDirFromPath('src/main/js/components/state.js')).toBe('src/main/js/components/');
  });

  it('should cut long path', function () {
    expect(collapsedDirFromPath('src/main/js/components/navigator/app/models/state.js'))
        .toBe('src/.../js/components/navigator/app/models/');
  });

  it('should cut very long path', function () {
    expect(collapsedDirFromPath('src/main/another/js/components/navigator/app/models/state.js'))
        .toBe('src/.../js/components/navigator/app/models/');
  });
});

describe('#fileFromPath()', function () {
  it('should return null when pass null', function () {
    expect(fileFromPath(null)).toBeNull();
  });

  it('should return empty string when pass "/"', function () {
    expect(fileFromPath('/')).toBe('');
  });

  it('should return file name when pass only file name', function () {
    expect(fileFromPath('file.js')).toBe('file.js');
  });

  it('should return file name when pass file path', function () {
    expect(fileFromPath('src/main/js/file.js')).toBe('file.js');
  });

  it('should return file name when pass file name without extension', function () {
    expect(fileFromPath('src/main/file')).toBe('file');
  });
});
