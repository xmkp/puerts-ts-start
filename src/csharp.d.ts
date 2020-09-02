
declare module 'csharp' {
    interface $Ref<T> {}

    interface $Task<T> {}

    namespace System {
        class Object {

        }
        class Array extends System.Object {

        }
        class String extends System.Object {

        }
        class ValueType extends System.Object {

        }
        class Enum extends System.ValueType {

        }
        class MarshalByRefObject extends System.Object {

        }
        class Void extends System.ValueType {

        }
        class Boolean extends System.ValueType {

        }
        class DateTime extends System.ValueType {

        }

    }
    namespace System.IO {
        class Directory extends System.Object {
            public static GetFiles(path: string):string[];
            public static GetFiles(path: string, searchPattern: string):string[];
            public static GetFiles(path: string, searchPattern: string, searchOption: System.IO.SearchOption):string[];
            public static GetDirectories(path: string):string[];
            public static GetDirectories(path: string, searchPattern: string):string[];
            public static GetDirectories(path: string, searchPattern: string, searchOption: System.IO.SearchOption):string[];
            public static GetFileSystemEntries(path: string):string[];
            public static GetFileSystemEntries(path: string, searchPattern: string):string[];
            public static GetFileSystemEntries(path: string, searchPattern: string, searchOption: System.IO.SearchOption):string[];
            public static EnumerateDirectories(path: string):System.Collections.Generic.IEnumerable$1<string>;
            public static EnumerateDirectories(path: string, searchPattern: string):System.Collections.Generic.IEnumerable$1<string>;
            public static EnumerateDirectories(path: string, searchPattern: string, searchOption: System.IO.SearchOption):System.Collections.Generic.IEnumerable$1<string>;
            public static EnumerateFiles(path: string):System.Collections.Generic.IEnumerable$1<string>;
            public static EnumerateFiles(path: string, searchPattern: string):System.Collections.Generic.IEnumerable$1<string>;
            public static EnumerateFiles(path: string, searchPattern: string, searchOption: System.IO.SearchOption):System.Collections.Generic.IEnumerable$1<string>;
            public static EnumerateFileSystemEntries(path: string):System.Collections.Generic.IEnumerable$1<string>;
            public static EnumerateFileSystemEntries(path: string, searchPattern: string):System.Collections.Generic.IEnumerable$1<string>;
            public static EnumerateFileSystemEntries(path: string, searchPattern: string, searchOption: System.IO.SearchOption):System.Collections.Generic.IEnumerable$1<string>;
            public static GetDirectoryRoot(path: string):string;
            public static CreateDirectory(path: string):System.IO.DirectoryInfo;
            public static CreateDirectory(path: string, directorySecurity: System.Security.AccessControl.DirectorySecurity):System.IO.DirectoryInfo;
            public static Delete(path: string):void;
            public static Delete(path: string, recursive: boolean):void;
            public static Exists(path: string):boolean;
            public static GetLastAccessTime(path: string):Date;
            public static GetLastAccessTimeUtc(path: string):Date;
            public static GetLastWriteTime(path: string):Date;
            public static GetLastWriteTimeUtc(path: string):Date;
            public static GetCreationTime(path: string):Date;
            public static GetCreationTimeUtc(path: string):Date;
            public static GetCurrentDirectory():string;
            public static GetLogicalDrives():string[];
            public static GetParent(path: string):System.IO.DirectoryInfo;
            public static Move(sourceDirName: string, destDirName: string):void;
            public static SetAccessControl(path: string, directorySecurity: System.Security.AccessControl.DirectorySecurity):void;
            public static SetCreationTime(path: string, creationTime: Date):void;
            public static SetCreationTimeUtc(path: string, creationTimeUtc: Date):void;
            public static SetCurrentDirectory(path: string):void;
            public static SetLastAccessTime(path: string, lastAccessTime: Date):void;
            public static SetLastAccessTimeUtc(path: string, lastAccessTimeUtc: Date):void;
            public static SetLastWriteTime(path: string, lastWriteTime: Date):void;
            public static SetLastWriteTimeUtc(path: string, lastWriteTimeUtc: Date):void;
            public static GetAccessControl(path: string, includeSections: System.Security.AccessControl.AccessControlSections):System.Security.AccessControl.DirectorySecurity;
            public static GetAccessControl(path: string):System.Security.AccessControl.DirectorySecurity;

        }
        enum SearchOption { TopDirectoryOnly = 0, AllDirectories = 1 }
        class FileSystemInfo extends System.MarshalByRefObject {

        }
        class DirectoryInfo extends System.IO.FileSystemInfo {

        }

    }
    namespace System.Collections.Generic {
        interface IEnumerable$1<T> {

        }

    }
    namespace System.Security.AccessControl {
        class ObjectSecurity extends System.Object {

        }
        class CommonObjectSecurity extends System.Security.AccessControl.ObjectSecurity {

        }
        class NativeObjectSecurity extends System.Security.AccessControl.CommonObjectSecurity {

        }
        class FileSystemSecurity extends System.Security.AccessControl.NativeObjectSecurity {

        }
        class DirectorySecurity extends System.Security.AccessControl.FileSystemSecurity {

        }
        enum AccessControlSections { None = 0, Audit = 1, Access = 2, Owner = 4, Group = 8, All = 15 }

    }

}
